export function initializeSpatialHero(root: HTMLElement, getMessages: () => readonly string[], onStatus: (key: "motionReduced" | "motionManual" | "motionPaused" | "motionRead") => void, onAnnounce: (index: number) => void, initiallyPaused = false) {
  const object = root.querySelector<HTMLElement>(".architectural-object");
  const region = root.querySelector<HTMLElement>(".interaction-region");
  const plate = root.querySelector<HTMLElement>(".rotating-plate");
  const controls = root.querySelector<HTMLElement>(".motion-controls");
  const status = root.querySelector<HTMLElement>(".motion-status");
  const announcement = root.querySelector<HTMLElement>(".manual-announcement");
  const faceButtons = root.querySelectorAll<HTMLButtonElement>("[data-select-face]");
  const physicalFaces = root.querySelectorAll<HTMLElement>(".plate-face");
  if (!object || !region || !plate || !controls || !status || !announcement || getMessages().length !== 4) return;

  const objectElement = object;
  const regionElement = region;
  const plateElement = plate;
  const controlsElement = controls;


  const reducedPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const supports3D = CSS.supports("transform-style", "preserve-3d");
  const dwellMs = 5000;
  const durationMs = 900;
  // Keep cumulative turns: 0 -> -90 -> -180 -> -270 -> -360 -> -450.
  // Four physical faces stay in the DOM; only their common parent rotates.
  let angle = 0;
  let face = 0;
  let remainingSteps = 0;
  let pausedByUser = initiallyPaused;
  let hovered = false;
  let focused = false;
  let rotating = false;
  const abort = new AbortController();
  let disposed = false;
  let focusTimer = 0;
  let timer: number | undefined;
  let completionTimer: number | undefined;
  let completionDeadline = 0;
  let completionRemaining = durationMs + 100;
  let pausedTransitions: Animation[] = [];

  function armCompletion(delay = durationMs + 100) {
    completionRemaining = delay;
    completionDeadline = performance.now() + delay;
    completionTimer = window.setTimeout(finishRotation, delay);
  }

  function setPaused(paused: boolean) {
    if (disposed || pausedByUser === paused) return;
    pausedByUser = paused;
    objectElement.dataset.motionPaused = String(paused);
    clearDwell();
    if (paused && rotating) {
      completionRemaining = Math.max(0, completionDeadline - performance.now());
      window.clearTimeout(completionTimer);
      if (typeof objectElement.getAnimations === "function") {
        pausedTransitions = objectElement.getAnimations({ subtree: true }).filter(animation => animation.playState === "running");
        pausedTransitions.forEach(animation => animation.pause());
      } else {
        // Legacy presentation fallback: stop at the readable target face.
        plateElement.style.transition = "none";
        plateElement.getBoundingClientRect();
        plateElement.style.transition = "";
        rotating = false;
        remainingSteps = 0;
        objectElement.dataset.rotating = "false";
      }
    } else if (!paused && rotating) {
      pausedTransitions.forEach(animation => animation.play());
      pausedTransitions = [];
      armCompletion(completionRemaining);
    }
    schedule();
  }

  function clearDwell() {
    window.clearTimeout(timer);
    timer = undefined;
  }

  function canAdvance() {
    return !disposed && supports3D && !reducedPreference.matches && !pausedByUser && !hovered && !focused && !document.hidden && !rotating;
  }

  function updateControls() {
    const reduced = reducedPreference.matches || !supports3D;
    const temporaryPause = hovered || focused || document.hidden;
    onStatus(reduced ? "motionReduced" : pausedByUser ? "motionManual" : temporaryPause ? "motionPaused" : "motionRead");
    objectElement.dataset.auto = canAdvance() ? "running" : "paused";
    const active = document.activeElement;
    for (const button of faceButtons) {
      button.setAttribute("aria-pressed", String(Number(button.dataset.selectFace) === face));
      button.setAttribute("aria-disabled", String(rotating));
      // Keep keyboard focus in place while ignoring input during a turn.
      button.disabled = rotating && !(focused && active === button);
    }

  }

  function updateFace() {
    objectElement.dataset.face = String(face);
    objectElement.dataset.angle = String(angle);
    plateElement.style.setProperty("--angle", `${angle}deg`);
    // Used solely by the static reduced-motion / unsupported-3D fallback.
    // Normal motion renders every face at its persistent physical transform.
    physicalFaces.forEach((element, index) => { element.dataset.active = String(index === face); });
  }

  function schedule() {
    clearDwell();
    updateControls();
    if (canAdvance()) timer = window.setTimeout(() => showFace((face + 1) % getMessages().length, false), dwellMs);
  }

  function finishRotation() {
    if (!rotating || pausedByUser) return;
    window.clearTimeout(completionTimer);
    rotating = false;
    objectElement.dataset.rotating = "false";
    if (remainingSteps > 0) {
      step();
      return;
    }
    schedule();
  }

  function step() {
    remainingSteps -= 1;
    face = (face + 1) % getMessages().length;
    angle -= 90;
    updateFace();
    rotating = true;
    objectElement.dataset.rotating = "true";
    updateControls();
    armCompletion();
  }

  function showFace(nextFace: number, manual: boolean) {
    if (rotating) return;
    if (manual) {
      onAnnounce(nextFace);
    }
    clearDwell();
    remainingSteps = (nextFace - face + getMessages().length) % getMessages().length;
    if (remainingSteps === 0) {
      schedule();
      return;
    }
    const instant = pausedByUser || reducedPreference.matches || !supports3D;
    if (instant) {
      angle -= 90 * remainingSteps;
      face = nextFace;
      remainingSteps = 0;
      plateElement.style.transition = "none";
      updateFace();
      plateElement.getBoundingClientRect();
      plateElement.style.transition = "";
      schedule();
    } else step(); // Even a distant manual selection travels in 90° steps.
  }

  plateElement.addEventListener("transitionend", (event) => {
    if (event.target === plateElement && event.propertyName === "transform") finishRotation();
  }, { signal: abort.signal });
  for (const button of faceButtons) {
    button.addEventListener("click", () => {
      const target = Number(button.dataset.selectFace);
      if (Number.isInteger(target) && target >= 0 && target < getMessages().length) showFace(target, true);
    }, { signal: abort.signal });
  }
  objectElement.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "mouse" || !finePointer.matches) return;
    hovered = true;
    schedule();
  }, { signal: abort.signal });
  objectElement.addEventListener("pointerleave", () => {
    hovered = false;
    schedule();
  }, { signal: abort.signal });
  function focusIn() {
    const active = document.activeElement;
    focused = regionElement.contains(active) || !!active?.matches(":focus-visible");
    schedule();
  }
  function focusOut() {
    window.clearTimeout(focusTimer);
    focusTimer = window.setTimeout(() => {
      const active = document.activeElement;
      focused = regionElement.contains(active) || (controlsElement.contains(active) && !!active?.matches(":focus-visible"));
      schedule();
    }, 0);
  }
  regionElement.addEventListener("focusin", focusIn, { signal: abort.signal });
  regionElement.addEventListener("focusout", focusOut, { signal: abort.signal });
  controlsElement.addEventListener("focusin", focusIn, { signal: abort.signal });
  controlsElement.addEventListener("focusout", focusOut, { signal: abort.signal });
  controlsElement.addEventListener("pointerdown", () => {
    focused = false;
    schedule();
  }, { signal: abort.signal });
  document.addEventListener("keydown", () => {
    if (controlsElement.contains(document.activeElement) || regionElement.contains(document.activeElement)) {
      focused = true;
      schedule();
    }
  }, { signal: abort.signal });
  document.addEventListener("visibilitychange", schedule, { signal: abort.signal });
  reducedPreference.addEventListener("change", () => {
    clearDwell();
    window.clearTimeout(completionTimer);
    rotating = false;
    remainingSteps = 0;
    pausedTransitions.forEach(animation => animation.cancel());
    pausedTransitions = [];
    objectElement.dataset.rotating = "false";
    // A preference change is an instant presentation change, never a new flip.
    plateElement.style.transition = "none";
    objectElement.dataset.reduced = String(reducedPreference.matches || !supports3D);
    // Flush only on the discrete preference event, not on animation frames.
    plateElement.getBoundingClientRect();
    plateElement.style.transition = "";
    schedule();
  }, { signal: abort.signal });
  finePointer.addEventListener("change", () => {
    hovered = false;
    schedule();
  }, { signal: abort.signal });
  window.addEventListener("pagehide", () => {
    clearDwell();
    window.clearTimeout(completionTimer);
    rotating = false;
    remainingSteps = 0;
    objectElement.dataset.rotating = "false";
    // Settle at the requested readable face before a bfcache restore.
    plateElement.style.transition = "none";
  }, { signal: abort.signal });
  window.addEventListener("pageshow", () => {
    plateElement.style.transition = "";
    schedule();
  }, { signal: abort.signal });
  updateFace();
  objectElement.dataset.motionPaused = String(pausedByUser);
  objectElement.dataset.reduced = String(reducedPreference.matches || !supports3D);
  controls.hidden = false;
  plateElement.style.setProperty("--rotation-duration", `${durationMs}ms`);
  const readyFrame = window.requestAnimationFrame(() => {
    objectElement.dataset.ready = "true";
    schedule();
  });
  return {
    setPaused,
    destroy() {
      disposed = true;
      abort.abort();
      clearDwell();
      window.clearTimeout(completionTimer);
      window.clearTimeout(focusTimer);
      window.cancelAnimationFrame(readyFrame);
      pausedTransitions.forEach(animation => animation.cancel());
    },
  };
}
