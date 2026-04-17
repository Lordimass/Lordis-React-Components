import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import "./BasketManager.scss";
import {
  GAItem,
  LocaleContext,
  LRCRemoteSettingsContext,
  ToastContext,
  trackViewCart,
} from "../../lib";
import { Basket } from "../../lib";
import { Product } from "../index";
import { FaShoppingBasket } from "react-icons/fa";

export interface BasketProps {
  /** Path to the checkout page. Defaults to `"/checkout"` */
  checkoutPath?: string;
  /** Paths under which the basket view is disabled, defaults to `["/checkout", "/thankyou"]`*/
  basketDisabledPaths?: string[];
}

export default function BasketManager({
  checkoutPath = "/checkout",
  basketDisabledPaths = ["/checkout", "/thankyou"],
}: BasketProps): ReactElement {
  async function toggleBasket() {
    // Don't open on specified pages
    const page = window.location.pathname;
    if (basketDisabledPaths.includes(page)) {
      setIsOpen(false);
      return;
    }

    // Toggle display mode
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    // Trigger GA4 Event if Basket Opened
    if (newIsOpen) {
      const basket = Basket.getBasket().products;
      let value = 0;
      basket.forEach((item) => {
        value += item.price;
      });
      trackViewCart(
        currency,
        value,
        basket.map((p) => new GAItem(p)),
      );
    }
  }

  async function redirectToCheckout() {
    if (basketQuantity == 0) {
      toast({
        msg: "You can't checkout without anything in your cart, silly!",
      });
      await toggleBasket();
      return;
    }
    window.location.href = checkoutPath;
  }

  function updateBasketQuantity() {
    let basketQuantTemp: number = 0;
    let basketPriceTemp: number = 0;

    Basket.getBasket().products.forEach((p) => {
      basketQuantTemp += p.basketQuantity;
      basketPriceTemp += p.price * p.basketQuantity;
    });

    // Animate if it changed
    if (basketQuantity - basketQuantTemp != 0) {
      const el = document.getElementById("basket");
      if (el) {
        el.classList.add("basket-grow");
        setTimeout(() => {
          el.classList.remove("basket-grow");
        }, 250);
      }
    }
    const counter = document.getElementById("basket-item-count");
    if (counter && basketQuantTemp == 0) {
      counter.style.display = "none";
    } else if (counter) {
      counter.style.display = "flex";
    }
    changeBasketQuantity(basketQuantTemp);
    changeBasketPrice("£" + basketPriceTemp.toFixed(2));
  }

  const siteSettings = useContext(LRCRemoteSettingsContext);
  const { toast } = useContext(ToastContext);
  const { currency } = useContext(LocaleContext);

  const [basketQuantity, changeBasketQuantity] = useState(0);
  const [basketPrice, changeBasketPrice] = useState("£0.00");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Disable checkout button in case of kill switch enabled
  const [killSwitch, setKillSwitch] = useState<boolean>(false);
  let killSwitchMessage;
  if (killSwitch) {
    killSwitchMessage = siteSettings.kill_switch?.message;
  }
  useEffect(() => {
    setKillSwitch(siteSettings.kill_switch?.enabled ?? false);
  }, [siteSettings]);

  // Update basket quantity on first render only
  useEffect(updateBasketQuantity, []);

  // Listen for basket updates
  useEffect(() => {
    window.addEventListener("basketUpdate", updateBasketQuantity);
    return () => {
      window.removeEventListener("basketUpdate", updateBasketQuantity);
    };
  }, []);

  // Check for clicks outside the basket container to close the basket.
  useEffect(() => {
    async function handleClickOutside(event: any) {
      // If click is outside the menu element, close it
      let close = false;
      if (menuRef.current && buttonRef.current) {
        close =
          !menuRef.current.contains(event.target) &&
          !buttonRef.current.contains(event.target);
      }
      if (menuRef.current && !menuRef.current.contains(event.target) && close) {
        await toggleBasket();
      }
    }

    // Bind listener when menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup when menu closes or component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="basket"
        id="basket"
        onClick={toggleBasket}
        ref={buttonRef}
      >
        <FaShoppingBasket />
        <div className="basket-item-count" id="basket-item-count">
          <p>{basketQuantity}</p>
        </div>
      </div>

      {isOpen ? (
        <div className="basket-display-wrapper">
          <div className="basket-display" id="basket-display" ref={menuRef}>
            <p> Basket ({basketQuantity} items)</p>
            <div className="basketItems">
              {Basket.getBasket().products.map((p) => (
                <Product prod={p} key={p.sku} horizontal />
              ))}
            </div>
            <p> Subtotal: {basketPrice}</p>
            <p style={{ color: "var(--jamie-grey)" }}> {killSwitchMessage} </p>
            <div
              className="checkout"
              onClick={killSwitch ? () => {} : redirectToCheckout}
              style={
                killSwitch
                  ? {
                      backgroundColor: "var(--jamie-grey)",
                      cursor: "not-allowed",
                    }
                  : {}
              }
            >
              <button className="btn btn-primary" id="checkout-btn">
                Checkout <FaShoppingBasket />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
