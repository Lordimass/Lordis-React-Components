import { IToast, IToastContext, ToastContext } from "../../lib";
import { ReactNode, useRef, useState } from "react";
import { ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";

/** Represents a toast with a unique key, used for distinguishing between toasts with identical content. */
interface Toast_internal extends IToast {
  key: string | number;
  timeoutId: number;
}

interface ToastWrapperProps {
  children?: ReactNode;
  /** Default information to display on toasts when not provided. */
  defaults?: Partial<IToast>;
}

/**
 * Wrapper for Bootstrap Toasts, including providing `ToastContext` with a method that can be called to display a toast.
 */
export default function ToastWrapper({
  children,
  defaults = { title: "Notification" },
}: ToastWrapperProps) {
  /** Close the given toast */
  function closeToast(key: Toast_internal["key"]): void {
    const i = tRef.current.findIndex((toast) => toast.key === key);
    if (i === -1) return; // If it didn't find the toast for any reason, stop.
    window.clearTimeout(tRef.current[i].timeoutId); // Clear the timeout on the toast, in case this was closed prematurely.
    setStack(tRef.current.toSpliced(i, 1));
  }

  // Add a toast to the stack.
  const toast: IToastContext["toast"] = (toast: IToast) => {
    // Unique identifier for the toast
    const key = Date.now();

    // Queue up removing the toast from the stack
    // If no duration was supplied, calculate a best guess based on an average character per second reading speed of 16.
    const delay = toast.duration ?? Math.max(toast.msg.length / 16, 5);
    const timeoutId = window.setTimeout(() => closeToast(key), delay * 1000);

    // Add toast to stack
    const internalToast: Toast_internal = {
      ...defaults,
      ...toast,
      key,
      timeoutId,
    };
    setStack([internalToast, ...tRef.current]);
  };

  function setStack(newStack: Toast_internal[]) {
    tRef.current = newStack;
    setToastStack(newStack);
  }

  // "Stack" of toasts to display on screen. Technically not a stack since its possible to remove an item from the middle
  const [toastStack, setToastStack] = useState<Toast_internal[]>([]);
  // Also utilising a ref here which is in sync with the state so that inconsistencies caused by multiple changes happening in one render are mitigated.
  const tRef = useRef<Toast_internal[]>([]);

  return (
    <ToastContext.Provider value={{ toast }}>
      <ToastContainer className="position-absolute" position="top-start">
        {toastStack.map((toast, i) => (
          <LRC_Toast
            key={i}
            toast={toast}
            onClose={() => closeToast(toast.key)}
          />
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
    <Toast onClose={onClose} bg={toast.variant}>
      <Toast.Header>
        <img
          src={toast.image?.uri}
          alt={toast.image?.alt}
          className="rounded me-2"
        />
        <strong className="me-auto">{toast.title ?? "Notification"}</strong>
      </Toast.Header>
      <Toast.Body
        className={toast.variant === "dark" ? "text-white" : undefined}
      >
        {toast.msg}
      </Toast.Body>
    </Toast>
  );
}
