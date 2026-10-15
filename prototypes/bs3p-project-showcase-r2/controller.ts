import { requiredElement } from "../bs3p-project-showcase/dom.js";
import { initialState, beginTransition, settleTransition } from "../bs3p-project-showcase/state.js";
import { createCylindricalStage } from "./stage.js";
import { installSwipe } from "../bs3p-project-showcase/swipe.js";
import type { Direction, ShowcaseController, GalleryProject } from "../bs3p-project-showcase/types.js";

export function mountCylindricalGallery(root: HTMLElement, projects: readonly GalleryProject[]): ShowcaseController {
  if (projects.length !== 3) throw new Error("ProjectShowcase needs three records.");
  const abort = new AbortController();
  const controls = requiredElement<HTMLElement>(root, "[data-controls]");
  const buttons = [...controls.querySelectorAll<HTMLButtonElement>("button")];
  const info = requiredElement<HTMLElement>(root, "[data-info]");
  const name = requiredElement<HTMLElement>(info, "[data-name]");
  const category = requiredElement<HTMLElement>(info, "[data-category]");
  const technology = requiredElement<HTMLElement>(info, "[data-technology]");
  const description = requiredElement<HTMLElement>(info, "[data-description]");
  const index = requiredElement<HTMLElement>(info, "[data-index]");
  const link = requiredElement<HTMLAnchorElement>(info, "[data-detail]");
  const announcement = requiredElement<HTMLElement>(root, "[data-announcement]");
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

  function renderInfo(announce: boolean) {
    const project = projects[state.activeIndex];
    name.textContent = project.name;
    category.textContent = project.category;
    technology.textContent = project.technologyLabel;
    description.textContent = project.description;
    index.textContent = `${String(state.activeIndex + 1).padStart(2, "0")} / 03`;
    link.hidden = project.detailHref === null;
    if (project.detailHref) {
      link.href = project.detailHref;
      link.style.removeProperty("display");
    } else {
      link.removeAttribute("href");
      link.style.display = "none";
    }
    link.setAttribute("aria-label", `${project.name} projesini inceleyin`);
    stage.element.setAttribute("aria-label", `${project.name} için görsel konsept: ${project.visual.label}`);
    if (announce) announcement.textContent = `${index.textContent}: ${project.name}. ${project.category}.`;
  }

  function finishTransition() {
    if (state.phase !== "transition") return;
    token++;
    state = settleTransition(state);
    stage.commit(state.activeIndex, state.step);
    renderInfo(true);
    reflectPhase();
  }
  settleEnvironment = finishTransition;

  function navigate(direction: Direction) {
    if (disposed) return;
    const next = beginTransition(state, direction, projects.length);
    if (!next) return;
    state = next;
    reflectPhase();
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
  root.querySelectorAll<HTMLAnchorElement>("[data-site-locale=tr]").forEach(anchor => anchor.addEventListener("click", () => {
    try { localStorage.setItem("bayessoft-locale", "tr"); } catch { /* Navigation remains available without storage. */ }
  }, { signal: abort.signal }));
  stage.commit(0, 0);
  renderInfo(false);
  reflectPhase();
  controls.hidden = false;
  stage.element.tabIndex = 0;
  root.dataset.ready = "true";

  return {
    navigate, getState: () => state,
    destroy() {
      finishTransition();
      disposed = true;
      token++;
      abort.abort();
      stage.destroy();
      controls.hidden = true;
      stage.element.tabIndex = -1;
    },
  };
}
