import { ContextType, createContext } from "react";
import { MinimalImage } from "./types";
import { Variant } from "react-bootstrap/types";

/** A custom toast.
 */
export interface IToast {
  /** Message to display on the toast */
  msg: string;
  /** Override the time to display the toast for in seconds. Null for infinite */
  duration?: number | null;
  /** Override the contents of the title of the toast. */
  title?: string;
  /** The URI of an image icon to display on the toast */
  image?: MinimalImage;
  /** The variant of toast to display */
  variant?: Variant;
}

/**
 * Context provided by {@link ToastWrapper}. Contains a single `toast` method which can be called with an instance of
 * {@link IToast} to display a toast on the screen.
 */
export const ToastContext = createContext<{
  /** A function which can be called to display a toast */
  toast: (
    /** Toast to display */
    toast: IToast,
  ) => void;
}>({ toast: () => {} });

export type IToastContext = ContextType<typeof ToastContext>;
