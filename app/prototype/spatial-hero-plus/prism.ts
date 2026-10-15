/** Keep the original initializer/state machine intact. Its two required
 * transport references live only during setup, then outside the document.
 * Their closure references remain valid; the product exposes only four dots. */
export function initializePrismDots(
  initialize: (messages: readonly string[]) => void,
  messages: readonly string[],
) {
  const controls = document.querySelector<HTMLElement>(".motion-controls");
  if (!controls) return;
  const adapter = document.createElement("div");
  adapter.hidden = true;
  for (const name of ["motion-toggle", "motion-next"]) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = name;
    adapter.append(button);
  }
  controls.prepend(adapter);
  try { initialize(messages); }
  finally { adapter.remove(); }
}
