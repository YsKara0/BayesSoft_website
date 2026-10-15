import { requiredElement } from "./dom";
import { initialState, beginTransition, settleTransition } from "./state";
import { createCylindricalStage } from "./stage";
import { installSwipe } from "./swipe";
import type { Direction, ShowcaseController } from "./types";

export function mountCylindricalGallery(root: HTMLElement, onChange: (state: import("./types").ShowcaseState) => void): ShowcaseController {
  const abort = new AbortController();
  const controls = requiredElement<HTMLElement>(root, "[data-controls]");
  const buttons = [...controls.querySelectorAll<HTMLButtonElement>("button")];
  const info = requiredElement<HTMLElement>(root, "[data-info]");
  let state = initialState();
  let token = 0;
  let disposed = false;
  // Geometry notifications start only after stage installation is complete.
  let settleEnvironment = () => {};
  const stage = createCylindricalStage(root, () => settleEnvironment());

  function reflectPhase() {
    root.dataset.phase = state.phase;
    root.dataset.activeIndex = String(state.activeIndex);
    root.dataset.toIndex = String(state.toIndex);
    root.dataset.step = String(state.step);
    info.setAttribute("aria-busy", String(state.phase === "transition"));
    buttons.forEach(button => button.setAttribute("aria-disabled", String(state.phase === "transition")));
  }

  function finishTransition() {
    if (state.phase !== "transition") return;
    token++;
    state = settleTransition(state);
    stage.commit(state.activeIndex, state.step);
    if (!disposed) onChange(state);
    reflectPhase();
  }
  settleEnvironment = finishTransition;

  function navigate(direction: Direction) {
    if (disposed) return;
    const next = beginTransition(state, direction, 3);
    if (!next) return;
    state = next;
    reflectPhase();
    if (!disposed) onChange(state);
    const run = ++token;
    stage.play(state).then(() => {
      if (!disposed && run === token) finishTransition();
    }).catch(() => {
      if (!disposed && run === token) finishTransition();
    });
  }

  buttons.forEach(button => button.addEventListener("click", () => navigate(button.dataset.direction === "-1" ? -1 : 1), { signal: abort.signal }));
  root.addEventListener("keydown", event => {
    if (event.repeat || event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) return;
    if (event.target instanceof HTMLElement && event.target.closest("input,textarea,select,[contenteditable=true]")) return;
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    navigate(event.key === "ArrowRight" ? 1 : -1);
  }, { signal: abort.signal });
  document.addEventListener("visibilitychange", () => { if (document.hidden) finishTransition(); }, { signal: abort.signal });
  installSwipe(stage.element, navigate, abort.signal);
  stage.commit(0, 0);
  onChange(state);
  reflectPhase();
  controls.hidden = false;
  stage.element.tabIndex = 0;
  root.dataset.ready = "true";

  return {
    navigate, getState: () => state,
    destroy() {
      disposed = true;
      finishTransition();
      token++;
      abort.abort();
      stage.destroy();
      controls.hidden = true;
      stage.element.tabIndex = -1;
    },
  };
}
