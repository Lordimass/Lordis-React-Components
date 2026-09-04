import Dinero, { type Currency } from "dinero.js";
import type { SupabaseClient } from "@supabase/supabase-js";

/** Shared configuration for Lordi's React Components. */
export const LordisReactComponents: {
  maxProductOrder: number;
  disabledProductMessages: {
    disabled: string;
    out_of_stock: string;
    [key: string]: string;
  };
  defaultLocale: string;
  defaultCurrency: Currency;
  supabase?: SupabaseClient;
} = {
  maxProductOrder: 10,
  disabledProductMessages: {
    disabled: "This product isn't available to buy right now, sorry!",
    out_of_stock: "We're out of stock, sorry!",
  },
  defaultLocale: "en-GB",
  defaultCurrency: "GBP",
};

/** Shorthand for {@link LordisReactComponents}. */
export const LRC: typeof LordisReactComponents = LordisReactComponents;

Dinero.defaultCurrency = LRC.defaultCurrency;
