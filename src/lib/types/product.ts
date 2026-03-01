export interface MinimalProduct {
  /** The ID of this product */
  sku: number;
  /** Customer facing name of the product.*/
  name?: string;
  /** Quantity of this product in stock */
  stock?: number;
  [key: string]: unknown;
}

export interface BasketProduct extends MinimalProduct {
  /** The quantity of this product in the user's basket */
  basketQuantity: number;
}

/** The shape of the data in `localStorage.basket` */
export interface Basket {
  /** The products in the basket and their quantities */
  products: BasketProduct[];
  /**
   * The date-time in milliseconds since epoch at which this version of the basket was last updated with
   * information from the database
   */
  lastUpdated: number;
}
