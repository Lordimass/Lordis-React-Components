declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}

/**
 * Initialises GA4 with default denied settings until cookies are accepted.
 *
 * GA4 must be initialised before consent for Advanced mode, which sends
 * cookie-less pings to track analytics without association with the user.
 */
export function initGA4(measurement_id: string, dev?: boolean) {
  if (dev) console.log("In a development environment");

  // Load gtag.js script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurement_id}`;
  document.head.appendChild(script);

  // Initialize gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  // Configure GA
  window.gtag("js", new Date());
  window.gtag("config", measurement_id, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    send_page_view: false,
    debug_mode: dev,
    transport_type: "beacon",
  });

  // Consent for cookie collection
  const consent =
    localStorage.getItem("consentModeAnswer") === "accept"
      ? "granted"
      : "denied";

  // Consent Mode V2 defaults (deny until user chooses)
  window.gtag("consent", "default", {
    // deny optional cookies for now.
    ad_storage: "denied",
    analytics_storage: consent,
    ad_user_data: "denied",
    ad_personalization: "denied",
    // allow essential cookies.
    functionality_storage: "granted",
    security_storage: "granted",
  });
}
