import { requiredElement } from "../bs3p-project-showcase/dom.js";
import type { ShowcaseState } from "../bs3p-project-showcase/types.js";
import { CYLINDER, cylinderGeometry, slotForStep } from "./geometry.js";

export function createCylindricalStage(root: HTMLElement, onEnvironmentChange: () => void) {
  const element = requiredElement<HTMLElement>(root, "[data-stage]");
  const ring = requiredElement<HTMLElement>(element, "[data-ring]");
  const panels = [...ring.querySelectorAll<HTMLElement>("[data-panel]")];
  const compact = matchMedia("(max-width: 699px)");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  let radius = 0;
  let previousEnvironment = "";
  let animation: Animation | null = null;

  function updateGeometry() {
    const width = element.getBoundingClientRect().width;
    const environment = `${width.toFixed(2)}:${compact.matches}:${reduced.matches}`;
    if (environment === previousEnvironment) return;
    onEnvironmentChange();
    previousEnvironment = environment;
    const geometry = cylinderGeometry(width, compact.matches);
    radius = geometry.radius;
    element.style.setProperty("--radius", `${radius}px`);
    element.style.setProperty("--perspective", `${geometry.perspective}px`);
    element.style.setProperty("--strip-width", `${geometry.stripWidth}px`);
    element.style.setProperty("--cover-height", `${geometry.coverHeight}px`);
    element.dataset.mode = compact.matches ? "compact-cylinder" : "cylinder";
  }

  const observer = new ResizeObserver(updateGeometry);
  observer.observe(element);
  compact.addEventListener("change", updateGeometry);
  reduced.addEventListener("change", updateGeometry);
  updateGeometry();

  function commit(_index: number, step: number) {
    element.style.setProperty("--ring-angle", `${-step * CYLINDER.step}deg`);
    element.dataset.activeSlot = String(slotForStep(step));
    panels.forEach((panel, slot) => panel.classList.toggle("is-current", slot === slotForStep(step)));
    animation?.cancel();
    animation = null;
  }

  function play(state: ShowcaseState): Promise<void> {
    if (reduced.matches || typeof ring.animate !== "function") return Promise.resolve();
    const transform = (step: number) => `translateZ(${-radius}px) rotateY(${-step * CYLINDER.step}deg)`;
    animation = ring.animate([{ transform: transform(state.step) }, { transform: transform(state.targetStep) }], {
      duration: compact.matches ? 700 : 1040,
      easing: "cubic-bezier(.42,0,.18,1)", fill: "both",
    });
    return animation.finished.then(() => undefined);
  }

  return {
    element, play, commit,
    destroy() {
      animation?.cancel();
      observer.disconnect();
      compact.removeEventListener("change", updateGeometry);
      reduced.removeEventListener("change", updateGeometry);
    },
  };
}
