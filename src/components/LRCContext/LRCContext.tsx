import { ReactNode } from "react";
import ToastWrapper from "../ToastWrapper/ToastWrapper";
import {
  LocaleContext,
  LRCRemoteSettings,
  LRCRemoteSettingsContext,
} from "../../lib";
import useLocale from "../../lib/localeHandler";

interface LRCContextProviderProps {
  /**
   * Settings for components which are provided from some external source. For example, this could be used to configure
   * the site based on values from a database table, which is fetched when the site loads. Certain keys are reserved for
   * settings which are used by components, which you can be set freely, so long as they follow the given structure.
   */
  getLRCRemoteSettingsHook?: () => LRCRemoteSettings;
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
  getLRCRemoteSettingsHook,
}: LRCContextProviderProps) {
  return (
    <ToastWrapper>
      <ToastDependent
        children={children}
        getLRCRemoteSettingsHook={getLRCRemoteSettingsHook}
      />
    </ToastWrapper>
  );
}

function ToastDependent({
  children,
  getLRCRemoteSettingsHook,
}: LRCContextProviderProps) {
  const localeContext = useLocale();
  const lrcRemoteSettings = getLRCRemoteSettingsHook
    ? getLRCRemoteSettingsHook()
    : {};
  return (
    <LRCRemoteSettingsContext.Provider value={lrcRemoteSettings}>
      <LocaleContext.Provider value={localeContext}>
        {children}
      </LocaleContext.Provider>
    </LRCRemoteSettingsContext.Provider>
  );
}
