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
