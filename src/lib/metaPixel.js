export const META_PIXEL_ID = "26157870320552236";

function canTrack() {
  return typeof window !== "undefined" && typeof window.fbq === "function";
}

export function trackPageView() {
  if (!canTrack()) return;
  window.fbq("track", "PageView");
}

export function trackLead() {
  if (!canTrack()) return;
  window.fbq("track", "Lead");
}

export function trackInitiateCheckout() {
  if (!canTrack()) return;
  window.fbq("track", "InitiateCheckout");
}

export function trackPurchase(value = 199, currency = "MXN") {
  if (!canTrack()) return;
  window.fbq("track", "Purchase", { value, currency });
}
