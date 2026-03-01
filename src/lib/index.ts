export * from "./types";
export * from "./basket";
export * from "./localeHandler";
export * from "./routing";

/** Configuration for Lordi's React Components */
export const LordisReactComponents: {
  /** The maximum number of one product that can be ordered at a time, regardless of stock. This is a hard cap. */
  maxProductOrder: number;
  /** Messages which are displayed to users for each possible way a product may be unavailable to buy right now */
  disabledProductMessages: {
    disabled: string;
    out_of_stock: string;
    [key: string]: string;
  };
} = {
  maxProductOrder: 10,
  disabledProductMessages: {
    disabled: "This product isn't available to buy right now, sorry!",
    out_of_stock: "We're out of stock, sorry!",
  },
};
/** Shorthand for {@link LordisReactComponents} */
export const LRC: typeof LordisReactComponents = LordisReactComponents;
