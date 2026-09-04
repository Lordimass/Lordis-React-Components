"use client";

import { createContext } from "react";
import { Currency } from "dinero.js";
import { getCurrency } from "locale-currency";
import { Locale } from "./localeServer";

// Only uses these before LRC is initialised, then should use values based on constants in LRC instead. Hence, no export.
export const DEFAULT_LOCALE = "en-GB";
export const DEFAULT_CURRENCY =
  (getCurrency(DEFAULT_LOCALE) as Currency) || "GBP";
export const DEFAULT_COUNTRY = DEFAULT_LOCALE.split("-")[1];

/**
 * Context wrapper which provides the user's locale, associated currency, and country. It's value should be set to the
 * return value of {@link getLocale} to automatically fetch these details by reverse geocoding the IP address.
 */
export const LocaleContext = createContext<Locale>({
  locale: DEFAULT_LOCALE,
  currency: DEFAULT_CURRENCY,
  country: DEFAULT_COUNTRY,
});
