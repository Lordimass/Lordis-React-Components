import Ticker from "../Ticker";
import { ArgumentsType } from "@vitest/utils";
import { useContext, useEffect, useRef, useState } from "react";
import "./BasketModifier.css";
import { useGetDisabledStatus } from "./lib";
import {
  getBasket,
  getProductPagePath,
  LocaleContext,
  LRC,
  MinimalProduct,
  setBasketStringQuantity,
} from "../../../lib";
import { FaShoppingBasket } from "react-icons/fa";

type BasketModifierProps = Omit<
  ArgumentsType<typeof Ticker>[0],
  "ariaLabel"
> & {
  /** The product for which to control the basket quantity of. If a collection of products is provided, this will be treated as a product group. */
  product: MinimalProduct | MinimalProduct[];
};

export default function BasketModifier({
  product,
  ...args
}: BasketModifierProps) {
  /**
   * Callback function to run when the value of the ticker changes.
   *
   * @param val The new value of the ticker
   */
  async function onTickerChange(val: number) {
    setBasketQuantity(val);
    setBasketStringQuantity(rp, val, currency);
    if (args.onChange) await args.onChange(val);
  }

  /**
   * Sync the value of the ticker with the current quantity in the basket string. Runs when the quantity of this
   * product updates from some other source, like the basket editor in the site header.
   */
  async function syncWithBasket() {
    // Find the new quantity of the product in the basket
    const basket = getBasket().products;
    const item = basket.find((item) => item.sku === rp.sku);
    const newQuantity = item?.basketQuantity ?? 0;

    // Update state and ticker value if it exists.
    setBasketQuantity(newQuantity);
    if (updateTickerRef.current) {
      await updateTickerRef.current(newQuantity);
    }
  }

  // Check if product is a group and return a different component if so
  let altReturnComponent;
  // Representative product
  let rp: MinimalProduct;
  if (Array.isArray(product) && product.length > 1) {
    // Cannot return straight away because of hooks.
    altReturnComponent = (
      <ProductGroupBasketModifier products={product} height={args.height} />
    );
    rp = product[0];
  } else if (Array.isArray(product)) rp = product[0];
  else rp = product;

  // Get currency for updating the basket string
  const { currency } = useContext(LocaleContext);
  // The value of the ticker. In theory, this is always in sync with the basket through `syncWithBasket`
  const [basketQuantity, setBasketQuantity] = useState<number>(0);
  // The maximum value of the ticker
  const max =
    typeof rp.stock === "number"
      ? Math.min(LRC.maxProductOrder, rp.stock)
      : LRC.maxProductOrder;
  // The disabled status of this ticker, as well as an explanatory message if it is disabled.
  const disabled = useGetDisabledStatus(rp);
  // A ref to a method that can be called to update the ticker value.
  const updateTickerRef = useRef<(newValue: number) => Promise<void>>(null);

  // If the product is disabled, it cannot be in the cart
  useEffect(() => {
    if (disabled.isDisabled && rp.sku !== 0) {
      onTickerChange(0).then();
    }
  }, [disabled]);

  useEffect(() => {
    if (!disabled.isDisabled) {
      // Adding listener is pointless if the product is disabled.
      syncWithBasket().then();
      window.addEventListener("basketUpdate", syncWithBasket);
      return () => {
        window.removeEventListener("basketUpdate", syncWithBasket);
      };
    }
  }, [product]);

  if (altReturnComponent) return altReturnComponent;
  else if (basketQuantity === 0) {
    return (
      <ZeroQuantityBasketModifier
        disabled={disabled}
        onTickerChange={onTickerChange}
        height={args.height}
      />
    );
  } else {
    return (
      <Ticker
        {...args}
        ariaLabel={"Basket quantity"}
        defaultValue={basketQuantity}
        onChange={onTickerChange}
        max={max}
        min={0}
        updateValueRef={updateTickerRef}
      />
    );
  }
}

function ProductGroupBasketModifier({
  products,
  height = "50px",
}: {
  /** The products that this basket modifier represents */
  products: MinimalProduct[];
  /** The height of the element */
  height?: string;
}) {
  // If there are no products in the group, button is disabled.
  const disabled = products.length == 0;
  // The first product is the representative for the group.
  const representative = disabled ? undefined : products[0];

  return (
    <a
      className="product-group-basket-modifier"
      href={representative ? getProductPagePath(representative.sku) : undefined}
      aria-disabled={disabled}
      style={{ height }}
    >
      <p>
        View Options <i className="fi fi-rr-angle-right"></i>
      </p>
    </a>
  );
}

function ZeroQuantityBasketModifier({
  disabled,
  onTickerChange,
  height,
}: {
  /** Whether the basket modifier should be disabled, and an optional message to explain why it's disabled */
  disabled?: { isDisabled: boolean; message?: string };
  /** Function to call when the ticker value changes, used when this component changes quantity from 0 to 1 */
  onTickerChange: (val: number) => void;
  /** Height of the element */
  height?: string;
}) {
  const isDisabled = disabled?.isDisabled;

  // TODO: Zoom animation in and out using React Motion
  return (
    <div className="zero-quantity-basket-modifier">
      {isDisabled && disabled.message ? <p>{disabled.message}</p> : null}
      <button
        className="btn btn-primary"
        style={{ height }}
        onClick={() => onTickerChange(1)}
        disabled={isDisabled}
      >
        <FaShoppingBasket />+
      </button>
    </div>
  );
}
