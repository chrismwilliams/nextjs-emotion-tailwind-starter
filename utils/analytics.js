import ReactGA from "react-ga";

function isProduction() {
  return process.env.NODE_ENV === "production";
}

export function initGA() {
  if (!isProduction || !process.env.GOOGLE_ANALYTICS_ID) return;

  // Options: https://github.com/react-ga/react-ga
  ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID);
}

export function logPageView(url) {
  if (!isProduction()) return;
  ReactGA.pageview(url);
}

export function logEvent(action = "", category = "") {
  if (action && category) {
    ReactGA.event({ action, category });
  }
}
