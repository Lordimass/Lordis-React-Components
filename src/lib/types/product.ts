import { MinimalImage, MinimalProductImage } from "./image";
import { Currency } from "dinero.js";
import { Basket, BasketProduct, LRC, trackModifyCart } from "../index";

/** A product object with the absolute minimum data to be identifiable as a product */
export interface MinimalProduct {
  /** The ID of this product */
  sku: number | string;
  /** Customer facing name of the product.*/
  name?: string;
  /** Quantity of this product in stock */
  stock?: number;
  [key: string]: unknown;
}

export type ProductDataConstructorOpts = {
  /** Customer facing name of the product.*/
  name?: string;
  /** Quantity of this product in stock */
  stock?: number;
  /** Price of product in the default currency, inc. tax. */
  price?: number;
  /**
   * Products with the same group name can be grouped together (in an array) to be displayed as one product with
   * variants, instead of each as unique products.
   */
  groupName?: string;
  /** All images associated with this product */
  images?: MinimalProductImage[];
  /** Whether this is a product which is currently active and available to buy */
  active?: boolean;
  [key: string]: unknown;
} & ProductMetadata;

/** A fully fledged product object. */
export class ProductData implements MinimalProduct {
  /** The ID of this product */
  public sku: number | string;
  /** Customer facing name of the product.*/
  public name: string;
  /** Quantity of this product in stock */
  public stock: number;
  /** Price of product in the default currency, inc. tax. */
  public price: number;
  /**
   * Products with the same group name can be grouped together (in an array) to be displayed as one product with
   * variants, instead of each as unique products.
   */
  public groupName?: string;
  /** All images associated with this product */
  public images: MinimalProductImage[];
  /** Whether this is a product which is currently active and available to buy */
  public active: boolean;
  /** Additional data on this product which isn't encoded in the standard class attributes.*/
  public metadata: ProductMetadata;
  [key: string]: unknown;

  public static NULL: ProductData = new ProductData(0);

  constructor(sku: number | string, opts: ProductDataConstructorOpts = {}) {
    this.sku = sku;
    let { name, stock, price, groupName, images, active, ...metadata } = {
      ...opts,
    };
    if (metadata.metadata != undefined) {
      metadata = { ...metadata, ...metadata.metadata };
      delete metadata.metadata;
    }
    this.sku = sku;
    this.name = name ?? "...";
    this.stock = stock ?? 0;
    this.price = price ?? 0;
    this.groupName = groupName;
    this.images = images ? images.sort(MinimalImage.compare) : [];
    this.active = active ?? true;
    this.metadata = metadata;
  }

  /**
   * Given a new quantity and relevant information on a product to associate it with,
   * update the local storage basket to contain that new quantity
   *
   * @param quant The new basket string quantity for the product.
   * @param currency The currency to be used when recording a GA4 event. Defaults to {@link LRC.defaultCurrency}
   */
  setBasketStringQuantity(
    quant: number,
    currency: Currency = LRC.defaultCurrency,
  ) {
    //console.log(`Setting product ${this.sku} basket quantity to ${quant}`);
    /** The change in quantity from this update, used for GA4 triggers */
    let diff = 0;
    const basket = Basket.getBasket();

    // If this is a new basket, set last updated to current time
    if (basket.lastUpdated === 0) basket.lastUpdated = Date.now();

    // Find product and set quantity
    let found: boolean = false;
    // Using for loop instead of forEach for splicing
    for (let i = 0; i < basket.products.length; i++) {
      const item: BasketProduct = basket.products[i];
      if (item.sku == this.sku) {
        diff = quant - (item.basketQuantity ?? 0);
        found = true;
        // Just remove it from the basket if 0
        if (quant == 0) {
          basket.products.splice(i, 1);
          break;
        }
        item.basketQuantity = quant;
        break;
      }
    }
    // If it wasn't found, create it
    if (!found && quant > 0) {
      diff = quant;
      basket.products.push(new BasketProduct(this.sku, quant, this));
    }

    // Save to localStorage
    localStorage.setItem("basket", JSON.stringify(basket));
    window.dispatchEvent(new CustomEvent("basketUpdate"));
    trackModifyCart(currency, this, diff);
  }
}

interface ProductMetadata {
  active?: boolean;
  /** Weight of the product in grams. */
  weight?: number | null;
  /** The name of this specific variant, if `group_name != undefined` */
  variant_name?: string;
  /** The priority of this product to search engines, used in sitemaps */
  seo_priority?: number;
  sort_order?: number;
  /** The user facing description of the product, supports Markdown (*italics*, **bold**, (links)[URL], etc.) */
  description?: string | null;
  /** Short description for customs forms. Max length: 50 characters.*/
  customs_description?: string | null;
  /** The ISO 3166-1 alpha-3 country code of the country which this product had its final manufacturing stage in. e.g. "CHN" for "China" */
  origin_country_code?: string | null;
  /** For products which are too large to fit in smaller boxes, so require a specific minimum box size to send. */
  package_type_override?: string | null;
  /** An extended description for customs forms applicable to higher value orders. Max length: 300 characters. */
  extended_customs_description?: string | null;
  /** Additional information about the product which is displayed to the customer. Every key-value pair is shown as is. */
  customer_metadata?: { [key: string]: any };
  /**
   * Short informational strings used to identify this product.
   */
  tags?: string[];
  [key: string]: any;
}

/**
 * A collection of closely related products/variants of the same product
 */
export class ProductGroup {
  /** The name of this group of products */
  public groupName: string;
  /** The products in the group */
  public products: ProductData[];

  /**
   * @param products The products in the group
   */
  constructor(products: ProductData[]) {
    this.groupName = products[0]?.groupName
      ? products[0].groupName
      : products[0].name;
    this.products = products;
  }

  /**
   * Fetch a list of all the images associated to this group.
   */
  getAllImages() {
    return this.products.map((p: ProductData) => p.images).flat();
  }

  /**
   * Get the image that represents this group as a whole.
   */
  getGroupRepresentativeImage() {
    const all = this.getAllImages().sort(MinimalImage.compare);
    const repr = all.filter(
      (image: MinimalProductImage) =>
        image.association_metadata?.group_representative,
    );
    return repr.length > 0 ? repr[0] : all[0];
  }

  /**
   * Get all the images which should be displayed on image carousels for a product in this group. This includes `global`
   * images, and excludes `group_representatives` and `group_product_icons`.
   * @param sku The SKU of the product in the group to use as a reference for which images to fetch.
   */
  getCarouselImages(sku: string | number) {
    const imgs = this.products
      .map((p: ProductData) => {
        if (p.sku === sku) {
          return p.images.filter(
            (i) =>
              !i.association_metadata?.group_representative &&
              !i.association_metadata?.variant_icon,
          );
        }
      })
      .flat()
      .filter((i) => !!i)
      .sort(MinimalImage.compare);
    const globals = this.products
      .map((p: ProductData) => {
        return p.images.filter((i) => i.association_metadata?.global);
      })
      .flat()
      .sort(MinimalImage.compare);
    return [...new Set([...imgs, ...globals])];
  }

  /**
   * Find and return the image attached to this product which has `variant_icon: true` in its `association_metadata`. This
   * shoud be a small and identifiable icon used when displaying this product as variants in a group.
   */
  getVariantIcon(sku: string | number) {
    const prod = this.products.filter((p) => p.sku === sku)[0];
    const variantIcons = prod.images.filter(
      (img) => img.association_metadata?.variant_icon,
    );
    if (variantIcons.length > 0) return variantIcons[0];
    else return this.getCarouselImages(sku)[0];
  }
}
