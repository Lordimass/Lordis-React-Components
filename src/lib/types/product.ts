import { MinimalImage, MinimalProductImage } from "./image";

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

interface ProductDataConstructorOpts {
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
  [key: string]: unknown;

  constructor(sku: number, opts: ProductDataConstructorOpts = {}) {
    this.sku = sku;
    this.name = opts.name ?? "...";
    this.stock = opts.stock ?? 0;
    this.price = opts.price ?? 0;
    this.groupName = opts.groupName;
    this.images = opts.images ?? [];
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

/** A product which is in the customer's basket */
export class BasketProduct extends ProductData {
  /** The quantity of this product in the user's basket */
  public basketQuantity?: number;

  constructor(
    sku: number,
    /** The quantity of this product in the user's basket */
    basketQuantity: number,
    opts?: ProductDataConstructorOpts,
  ) {
    super(sku, opts);
    this.basketQuantity = basketQuantity;
  }
}

/** A basket of products for a customer */
export class Basket {
  /** The products in the basket and their quantities */
  products: BasketProduct[];
  /**
   * The date-time in milliseconds since epoch at which this version of the basket was last updated with
   * information from the database
   */
  lastUpdated: number;
  constructor(
    /** The products in the basket and their quantities */
    products: BasketProduct[],
    /**
     * The date-time in milliseconds since epoch at which this version of the basket was last updated with
     * information from the database
     */
    lastUpdated: number,
  ) {
    this.products = products;
    this.lastUpdated = lastUpdated;
  }

  /**
   * Fetch and return the basket from `localStorage`.
   * @returns A {@link Basket} object. Returns an empty basket with {@link Basket.lastUpdated} set to 0 if no basket was
   * found in localStorage.
   */
  static getBasket(): Basket {
    // Fetch from localStorage
    const basketString = localStorage.getItem("basket");
    if (!basketString) return new Basket([], 0);
    else return this.deserialize(basketString);
  }

  /** Convert a serialized basket string from {@link JSON.stringify} into a basket object */
  private static deserialize(serialized: string): Basket {
    const json = JSON.parse(serialized);
    if (!json.products || !(json.products instanceof Array)) {
      return new Basket([], json.lastUpdated ?? 0);
    }

    // Deserialize products
    const productsJson = json.products as Array<any>;
    const products: BasketProduct[] = productsJson
      .map((p) => {
        if (!p.sku) return null;
        return new BasketProduct(p.sku, p.basketQuantity ?? 0, p);
      })
      .filter((p) => p !== null);

    return new Basket(products, json.lastUpdated ?? 0);
  }
}
