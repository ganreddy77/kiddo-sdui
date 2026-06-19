export function trackEvent(
  eventName: string,
  payload?: any
) {
  console.log(
    "[Analytics]",
    eventName,
    payload
  );
}