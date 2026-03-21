import { MinimalProductImage } from "./image";
import { Currency } from "dinero.js";
import { BasketProduct, Basket } from "./index";
import { LRC } from "../index";

/** A product object with the absolute minimum data to be identifiable as a product */
export interface MinimalProduct {
  /** The ID of this product */
  sku: number;
  /** Customer facing name of the product.*/
  name?: string;
  /** Quantity of this product in stock */
  stock?: number;
  [key: string]: unknown;
}

export interface ProductDataConstructorOpts {
  name?: string;
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
}

/** A fully fledged product object */
export class ProductData implements MinimalProduct {
  /** The ID of this product */
  public sku: number;
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
  public metadata: { [key: string]: any };
  [key: string]: unknown;

  constructor(sku: number, opts: ProductDataConstructorOpts = {}) {
    this.sku = sku;
    this.name = opts.name ?? "...";
    this.stock = opts.stock ?? 0;
    this.price = opts.price ?? 0;
    this.groupName = opts.groupName;
    this.images = opts.images ?? [];
    this.active = opts.active ?? true;
    this.metadata = opts;
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

    // TODO: Trigger GA4 Event
    // triggerAddToCart(prod, diff, currency).then();
  }
}

/**
 * A collection of closely related products/variants of the same product
 */
export class ProductGroup {
  /** The name of this group of products */
  public groupName: string;
  /** The products in the group */
  public products: ProductData[];

  constructor(
    /** The products in the group */
    products: ProductData[],
  ) {
    if (!products[0]?.groupName) {
      throw new Error(
        "Could not determine group name for product array:" + products,
      );
    }
    this.groupName = products[0].groupName;
    this.products = products;
  }
}
