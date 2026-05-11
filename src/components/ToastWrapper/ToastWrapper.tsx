import { AnimatePresence, motion } from "motion/react";
import { IToast, IToastContext, ToastContext } from "../../lib";
import { ReactNode, useRef, useState } from "react";
import { ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";

/** Represents a toast with a unique key, used for distinguishing between toasts with identical content. */
interface Toast_internal extends IToast {
  key: string | number;
  timeoutId?: number;
  /** Whether to render this toast currently. Allows toasts to continue to exist while they animate out */
  show: boolean;
}

interface ToastWrapperProps {
  children?: ReactNode;
  /** Default information to display on toasts when not provided. */
  defaults?: Partial<IToast>;
  /** Callback function when the toasts on display change */
  onChange?: (toasts: IToast[]) => void;
}

/**
 * Wrapper for Bootstrap Toasts, including providing {@link ToastContext} with a method that can be called to display a toast.
 */
export default function ToastWrapper({
  children,
  defaults = { title: "Notification" },
  /* c8 ignore next 1 */
  onChange = () => {},
}: ToastWrapperProps) {
  /** Close the given toast */
  function closeToast(key: Toast_internal["key"]): void {
    const i = tRef.current.findIndex((toast) => toast.key === key);
    window.clearTimeout(tRef.current[i].timeoutId); // Clear the timeout on the toast, in case this was closed prematurely.
    // Hide the toast, then schedule removing it completely. This allows time for animations to run
    const newStack = [...tRef.current];
    newStack[i].show = false;
    window.setTimeout(() => {
      removeToast(key);
    }, 500);
    setStack(newStack);
  }

  function removeToast(key: Toast_internal["key"]): void {
    const i = tRef.current.findIndex((toast) => toast.key === key);
    setStack(tRef.current.toSpliced(i, 1));
  }

  // Add a toast to the stack.
  const toast: IToastContext["toast"] = (toast: IToast | string) => {
    // Handle converting strings to `IToast`
    toast = typeof toast === "string" ? { msg: toast } : toast;

    // Unique identifier for the toast
    const key = Date.now();

    // Queue up removing the toast from the stack
    // If no duration was supplied, calculate a best guess based on an average character per second reading speed of 16.
    let timeoutId: number | undefined;
    let delay = toast.duration;
    let msg = toast.msg;
    if (delay !== null) {
      if (!delay && typeof msg === "string")
        delay = Math.max(msg.length / 16, 5);
      else if (!delay) delay = 5;

      timeoutId = window.setTimeout(() => closeToast(key), delay * 1000);
    }

    // Add toast to stack
    const internalToast: Toast_internal = {
      key,
      ...defaults,
      ...toast,
      timeoutId,
      show: true,
    };
    setStack([internalToast, ...tRef.current]);
  };

  function setStack(newStack: Toast_internal[]) {
    tRef.current = newStack;
    setToastStack(newStack);
    onChange(newStack);
  }

  // "Stack" of toasts to display on screen. Technically not a stack since its possible to remove an item from the middle
  const [toastStack, setToastStack] = useState<Toast_internal[]>([]);
  // Also utilising a ref here which is in sync with the state so that inconsistencies caused by multiple changes happening in one render are mitigated.
  const tRef = useRef<Toast_internal[]>([]);

  return (
    // TODO: Fix slight animation jank when there are multiple toasts open and one in the middle of the list closes
    <ToastContext.Provider value={{ toast, closeToast }}>
      <ToastContainer className="toast-container" position="top-start">
        {toastStack.map((toast, i) => (
          <AnimatePresence key={i}>
            {toast.show ? (
              <LRC_Toast
                key={i}
                toast={toast}
                onClose={() => closeToast(toast.key)}
              />
            ) : null}
          </AnimatePresence>
        ))}
      </ToastContainer>

      {/* Render the children that this element is wrapping */}
      {children}
    </ToastContext.Provider>
  );
}

interface Toast_internalProps {
  /** Toast to display */
  toast: IToast;
  /** Function to call to close the toast */
  onClose: () => void;
}

/** Internal wrapper component for React Bootstrap Toasts. */
export function LRC_Toast({ toast, onClose }: Toast_internalProps) {
  /*
  We don't use the built-in delay/auto-hide functionality because it behaves inconsistently when you completely
  remove toasts from the stack after they're hidden.
  */
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
    >
      <Toast onClose={onClose} bg={toast.variant}>
        <Toast.Header>
          {toast.image ? (
            <img
              src={toast.image.uri}
              alt={toast.image.alt}
              className="rounded me-2"
            />
          ) : null}
          <strong className="me-auto">{toast.title ?? "Notification"}</strong>
        </Toast.Header>
        <Toast.Body
          className={toast.variant === "dark" ? "text-white" : undefined}
        >
          {toast.msg}
        </Toast.Body>
      </Toast>
    </motion.div>
  );
}
