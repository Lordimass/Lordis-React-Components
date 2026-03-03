import { createContext } from "react";
import { MinimalImage } from "./types";
import { Variant } from "react-bootstrap/types";

export interface IToastContext {
  /** A function which can be called to display a toast */
  toast: (
    /** Toast to display */
    toast: IToast,
  ) => void;
}

export interface IToast {
  /** Message to display on the toast */
  msg: string;
  /** Override the time to display the toast for in seconds. */
  duration?: number;
  /** Override the contents of the title of the toast. */
  title?: string;
  /** The URI of an image icon to display on the toast */
  image?: MinimalImage;
  /** The variant of toast to display */
  variant?: Variant;
}

export const ToastContext = createContext<IToastContext>({ toast: () => {} });
