import { CYLINDER } from "./geometry";

// WebKit can compute the nested cylinder's bounds correctly while painting its
// zero-size panel descendants in the same plane. CSS.supports cannot detect it.
export function createWebKitSurfaces(stage: HTMLElement) {
  if (!/AppleWebKit\//.test(navigator.userAgent) || /(?:Chrome|Chromium|Edg|OPR)\//.test(navigator.userAgent)) return;

  const surfaces = [...stage.querySelectorAll<HTMLElement>("[data-panel]")].flatMap(panel =>
    [...panel.querySelectorAll<HTMLElement>("[data-strip]")].map(element => ({
      element,
      angle: Number(panel.dataset.slot) * CYLINDER.step + parseFloat(element.style.getPropertyValue("--strip-angle")),
    })));
  let frame = 0;
  stage.dataset.renderer = "projected-surfaces";

  function stop() {
    cancelAnimationFrame(frame);
    frame = 0;
  }

  function paint(step: number) {
    for (const { element, angle } of surfaces) {
      const rotation = angle - step * CYLINDER.step;
      const facing = Math.cos(rotation * Math.PI / 180);
      element.style.setProperty("--surface-angle", `${rotation}deg`);
      element.style.visibility = facing > 0 ? "visible" : "hidden";
      element.style.zIndex = String(Math.round((1 + facing) * 1000));
    }
  }

  return {
    commit(step: number) { stop(); paint(step); },
    play(animation: Animation, from: number, to: number) {
      stop();
      const tick = () => {
        // Reuse the existing WAAPI duration/easing rather than a second clock.
        const progress = animation.effect?.getComputedTiming().progress;
        if (progress != null) paint(from + (to - from) * progress);
        if (animation.playState === "running" || animation.pending) frame = requestAnimationFrame(tick);
        else frame = 0;
      };
      tick();
    },
    destroy() {
      stop();
      delete stage.dataset.renderer;
      for (const { element } of surfaces) {
        element.style.removeProperty("--surface-angle");
        element.style.removeProperty("visibility");
        element.style.removeProperty("z-index");
      }
    },
  };
}
