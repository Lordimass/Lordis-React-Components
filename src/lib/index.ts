import Dinero, { Currency } from "dinero.js";

export * from "./types";
export * from "./ga";
export * from "./localeHandler";
export * from "./routing";
export * from "./toasts";
export * from "./price";
export * from "./image";

/** Configuration for Lordi's React Components. This is also accessible by the builtin alias, `LRC`. */
export const LordisReactComponents: {
  /** The maximum number of one product that can be ordered at a time, regardless of stock. This is a hard cap. */
  maxProductOrder: number;
  /** Messages which are displayed to users for each possible way a product may be unavailable to buy right now */
  disabledProductMessages: {
    disabled: string;
    out_of_stock: string;
    [key: string]: string;
  };
  /** If a locale can't be automatically determined, or {@link LocaleContext} is not provided, use this locale instead.*/
  defaultLocale: string;
  /**
   * Default currency to assume monetary values are in. This does not determine the currency displayed to users, just
   * what a float "4.99" should be interpreted as, for example. When this is changed, it's best practice to also change
   * {@link Dinero.defaultCurrency} too.
   */
  defaultCurrency: Currency;
} = {
  maxProductOrder: 10,
  disabledProductMessages: {
    disabled: "This product isn't available to buy right now, sorry!",
    out_of_stock: "We're out of stock, sorry!",
  },
  defaultLocale: "en-GB",
  defaultCurrency: "GBP",
};
/** Shorthand for {@link LordisReactComponents} */
export const LRC: typeof LordisReactComponents = LordisReactComponents;

Dinero.defaultCurrency = LRC.defaultCurrency;
