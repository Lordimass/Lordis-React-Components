"use client";

import { ReactNode, useEffect, useState } from "react";
import ToastWrapper from "../ToastWrapper/ToastWrapper";
import getLocale, { Locale } from "../../lib/locale/localeServer";
import { LRCRemoteSettings, LRCRemoteSettingsContext } from "../../lib/types";
import {
  DEFAULT_COUNTRY,
  DEFAULT_CURRENCY,
  DEFAULT_LOCALE,
  LocaleContext,
} from "src/lib/locale/localeClient";

interface LRCContextProviderProps {
  /**
   * Settings for components which are provided from some external source. For example, this could be used to configure
   * the site based on values from a database table, which is fetched when the site loads. Certain keys are reserved for
   * settings which are used by components, which you can be set freely, so long as they follow the given structure.
   */
  LRCRemoteSettingsProvider?: () => Promise<LRCRemoteSettings>;
  children?: ReactNode;
}

/**
 * Context provider for all key LRC functionality. Each context provider can theoretically be used in isolation, but
 * it's best to have this as close to the root of the DOM as possible. This is because many of the components in the
 * library (particularly webshop components) require this context to work properly.
 *
 * Provides:
 * - {@link ToastWrapper|`ToastWrapper`}
 * - {@link LRCRemoteSettingsContext|`LRCRemoteSettingsContext`}
 * - {@link LocaleContext|`LocaleContext`}
 */
export default function LRCContext({
  children,
  LRCRemoteSettingsProvider,
}: LRCContextProviderProps) {
  return (
    <ToastWrapper>
      <ToastDependent
        children={children}
        LRCRemoteSettingsProvider={LRCRemoteSettingsProvider}
      />
    </ToastWrapper>
  );
}

function ToastDependent({
  children,
  LRCRemoteSettingsProvider,
}: LRCContextProviderProps) {
  const [locale, setLocale] = useState<Locale>({
    locale: DEFAULT_LOCALE,
    currency: DEFAULT_CURRENCY,
    country: DEFAULT_COUNTRY,
  });
  const [lrcRemoteSettings, setLrcRemoteSettings] = useState<LRCRemoteSettings>(
    {},
  );
  useEffect(() => {
    getLocale().then((l) => setLocale(l));
    LRCRemoteSettingsProvider
      ? LRCRemoteSettingsProvider().then((lrc) => setLrcRemoteSettings(lrc))
      : null;
  }, []);

  return (
    <LRCRemoteSettingsContext.Provider value={lrcRemoteSettings}>
      <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
    </LRCRemoteSettingsContext.Provider>
  );
}
