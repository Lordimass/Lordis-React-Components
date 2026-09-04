"use client";

import { BsCookie } from "react-icons/bs";
import { useContext, useEffect } from "react";
import { ToastContext } from "../toasts";
import { acceptCookies, declineCookies } from "./index";

/**
 * Displays a toast requesting consent to use the `ga_` cookie. If this is not displayed and accepted, cookies are
 * declined by default.
 * @param msg Message to display on the toast asking for consent.
 */
export function useConsentMode(
  msg = "Is it ok for us to collect basic site analytics using a cookie?",
) {
  const { toast, closeToast } = useContext(ToastContext);
  const key = "ConsentModeToast";
  useEffect(() => {
    if (localStorage.getItem("consentModeAnswer") == "accept") {
      acceptCookies();
      return;
    }
    toast({
      title: (
        <>
          <BsCookie /> Cookies?
        </>
      ),
      msg: (
        <>
          <p>{msg}</p>
          <div style={{ display: "flex", gap: "3px" }}>
            <button
              className={"btn btn-success"}
              onClick={() => {
                acceptCookies();
                closeToast("ConsentModeToast");
              }}
            >
              Accept
            </button>

            <button
              className={"btn btn-outline-danger"}
              onClick={() => {
                declineCookies();
                closeToast("ConsentModeToast");
              }}
            >
              Decline
            </button>
          </div>
        </>
      ),
      duration: null,
      key,
    });
  }, []);
}
