export * from "./init";
export * from "./events";
export * from "./types";
export * from "./helpers";

/**
 * Update consent to agree to Google Analytics cookies.
 */
export function acceptCookies() {
  window.gtag("consent", "update", {
    analytics_storage: "granted",
  });
  localStorage.setItem("consentModeAnswer", "accept");
}

/**
 * Update consent to deny use of Google Analytics cookies.
 */
export function declineCookies() {
  window.gtag("consent", "update", {
    analytics_storage: "denied",
  });
  localStorage.setItem("consentModeAnswer", "decline");
}
