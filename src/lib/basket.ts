import { Currency } from "dinero.js";
import { Basket, BasketProduct, MinimalProduct } from "./types";
import { LRC } from "./index";

/**
 * Given a new quantity and relevant information on a product to associate it with,
 * update the local storage basket to contain that new quantity
 */
export function setBasketStringQuantity(
  prod: MinimalProduct,
  quant: number,
  currency: Currency = LRC.defaultCurrency,
) {
  console.log(`Setting product ${prod.sku} basket quantity to ${quant}`);
  /** The change in quantity from this update, used for GA4 triggers */
  let diff = 0;
  const basket = Basket.getBasket();

  // If this is a new basket, set last updated to current time
  if (basket.lastUpdated === 0) basket.lastUpdated = Date.now();

  // Find product and set quantity
  let found: boolean = false;
  // Using for loop instead of forEach for splicing
  for (let i = 0; i < basket.products.length; i++) {
    let item: BasketProduct = basket.products[i];
    if (item.sku == prod.sku) {
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
    basket.products.push(new BasketProduct(prod.sku, quant, prod));
  }

  // Save to localStorage
  localStorage.setItem("basket", JSON.stringify(basket));
  window.dispatchEvent(new CustomEvent("basketUpdate"));

  // TODO: Trigger GA4 Event
  // triggerAddToCart(prod, diff, currency).then();
}
