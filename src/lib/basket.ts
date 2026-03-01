import Dinero, { Currency } from "dinero.js";
import { Basket, BasketProduct, MinimalProduct } from "./types";

/**
 * Fetch and return the basket from localStorage, including type validation.
 * @returns A {@link Basket} object. Returns an empty basket with {@link Basket.lastUpdated} set to the Unix Epoch if
 * no basket was found in localStorage.
 */
export function getBasket(): Basket {
  // Fetch from localStorage
  const basketString = localStorage.getItem("basket");
  if (!basketString) return { products: [], lastUpdated: 0 };
  return JSON.parse(basketString) as Basket;

  // Validate shape
  // TODO: Setup schemas
  // if (VALIDATORS.Basket(basketObj)) return basketObj as Basket;
  // console.warn(`
  //       Basket was not in expected shape, resetting basket. Old basket:
  //       ${JSON.stringify(basketObj, undefined, 2)}`
  // )
  // logValidationErrors("Basket")

  // Reset basket if validation failed, clearing any old or mismatched basket representations
  // localStorage.removeItem("basket")
  // window.dispatchEvent(new CustomEvent("basketUpdate"))
  //
  // return {products: [], lastUpdated: 0};
}

/**
 * Given a new quantity and relevant information on a product to associate it with,
 * update the local storage basket to contain that new quantity
 */
export function setBasketStringQuantity(
  prod: MinimalProduct,
  quant: number,
  currency: Currency = Dinero.defaultCurrency,
) {
  console.log(`Setting basket quantity of SKU ${prod.sku} to ${quant}`);
  /** The change in quantity from this update, used for GA4 triggers */
  let diff = 0;
  const basket = getBasket();

  // If this is a new basket, set last updated to current time
  if (basket.lastUpdated === 0) basket.lastUpdated = Date.now();

  // Find product and set quantity
  let found: boolean = false;
  // Using for loop instead of forEach for splicing
  for (let i = 0; i < basket.products.length; i++) {
    let item: BasketProduct = basket.products[i];
    if (item.sku == prod.sku) {
      diff = quant - item.basketQuantity;
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
    basket.products.push({ ...prod, basketQuantity: quant });
  }

  // Save to localStorage
  localStorage.setItem("basket", JSON.stringify(basket));
  window.dispatchEvent(new CustomEvent("basketUpdate"));

  // TODO: Trigger GA4 Event
  // triggerAddToCart(prod, diff, currency).then();
}
