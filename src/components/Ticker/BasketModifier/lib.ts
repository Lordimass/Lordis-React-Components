import { useContext } from "react";
import { MinimalProduct } from "../../../lib/types/product";
import { LRCRemoteSettingsContext } from "../../../lib/types";
import { LRC } from "../../../lib/config";

/**
 * Figure out whether a given product is available to buy, as well as a message if it is not.
 * @param product The product to check.
 */
export function useGetDisabledStatus(product: MinimalProduct) {
  const siteSettings = useContext(LRCRemoteSettingsContext);
  let disabled: { isDisabled: boolean; message?: string } = {
    isDisabled: false,
    message: undefined,
  };
  const disabledMessages = LRC.disabledProductMessages;

  // Kill Switch
  if (siteSettings.kill_switch?.enabled)
    disabled = { isDisabled: true, message: siteSettings.kill_switch?.message };
  // Active
  else if (product.active == false)
    disabled = { isDisabled: true, message: disabledMessages?.disabled };
  // Stock
  else if (typeof product.stock === "number" && product.stock <= 0)
    disabled = { isDisabled: true, message: disabledMessages?.out_of_stock };
  return disabled;
}
