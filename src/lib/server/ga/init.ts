declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}

/**
 * Initialises Google Analytics 4 with default denied settings until cookies are accepted.
 *
 * GA4 must be initialised before consent for Advanced mode, which sends cookie-less pings to track analytics without
 * association with the user. This should be combined with {@link acceptCookies} and {@link declineCookies} when consent
 * is gained (or declined) by the user to use cookies for analytics. Until then, only cookie-less pings will be used,
 * which prevent insights into user behaviours because events are not associated with each other, and instead just exist
 * as stand-alone events.
 *
 * This method should be called early in the flow. Before the root component is even initialised (i.e. in `main.tsx`)
 */
export function initGA4(measurement_id: string, dev?: boolean) {
  if (dev) console.log("In a development environment");

  // Load gtag.js script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurement_id}`;
  document.head.appendChild(script);

  // Initialise gtag function
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
    ad_storage: consent,
    analytics_storage: consent,
    ad_user_data: consent,
    ad_personalization: consent,
    // allow essential cookies.
    functionality_storage: "granted",
    security_storage: "granted",
  });
}
