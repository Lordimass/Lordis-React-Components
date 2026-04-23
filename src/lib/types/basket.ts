import { ProductDataConstructorOpts, ProductData } from "./index";
import { GAItem } from "../ga";

/** A product which is in the customer's basket */
export class BasketProduct extends ProductData {
  /** The quantity of this product in the user's basket */
  public basketQuantity: number;

  constructor(
    sku: number | string,
    /** The quantity of this product in the user's basket */
    basketQuantity?: number,
    opts?: ProductDataConstructorOpts,
  ) {
    super(sku, opts);
    delete this.metadata.sku;
    this.basketQuantity = basketQuantity ?? 1;
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
   * Get the total value of this basket as the sum of product prices multiplied by the quantity in the basket.
   * @returns A number representing the total value of this basket.
   * @example 12.98
   */
  getValue(): number {
    let value = 0;
    this.products.forEach((p) => {
      value += p.price * p.basketQuantity;
    });
    return value;
  }

  /**
   * Get the basket as an array of Google Analytics items.
   */
  getGAItems(): GAItem[] {
    return this.products.map((p) => new GAItem(p));
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
