import { ReactNode } from "react";
import ToastWrapper from "../ToastWrapper/ToastWrapper";
import {
  LocaleContext,
  LRCRemoteSettings,
  LRCRemoteSettingsContext,
} from "../../lib";
import useLocale from "../../lib/localeHandler";

interface LRCContextProviderProps {
  LRCRemoteSettingsContextValue?: LRCRemoteSettings;
  children: ReactNode;
}

/**
 * Context provider for all key LRC functionality. Each context provider can theoretically be used in isolation, but
 * it's best to have this as close to the root of the DOM as possible as many of the components in the library
 * (particularly webshop components) require this context to work properly.
 *
 * Provides:
 * - {@link LRCRemoteSettingsContext|`LRCRemoteSettingsContext`}
 * - {@link ToastWrapper|`ToastWrapper`}
 * - {@link LocaleContext|`LocaleContext`}
 */
export default function LRCContextProvider({
  children,
  LRCRemoteSettingsContextValue,
}: LRCContextProviderProps) {
  const localeContext = useLocale();
  return (
    <LRCRemoteSettingsContext.Provider
      value={LRCRemoteSettingsContextValue ?? {}}
    >
      <ToastWrapper>
        <LocaleContext.Provider value={localeContext}>
          {children}
        </LocaleContext.Provider>
      </ToastWrapper>
    </LRCRemoteSettingsContext.Provider>
  );
}
