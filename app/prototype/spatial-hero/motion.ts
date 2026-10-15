/**
 * Self-contained, typed browser entry point. The Route Handler serializes this
 * function after TypeScript compilation; keep browser dependencies inside it.
 * No React hydration or production layout changes are needed for this study.
 */
export function initializeSpatialHero(messages: readonly string[]) {
  const object = document.querySelector<HTMLElement>(".architectural-object");
  const region = document.querySelector<HTMLElement>(".interaction-region");
  const plate = document.querySelector<HTMLElement>(".rotating-plate");
  const controls = document.querySelector<HTMLElement>(".motion-controls");
  const toggle = document.querySelector<HTMLButtonElement>(".motion-toggle");
  const next = document.querySelector<HTMLButtonElement>(".motion-next");
  const status = document.querySelector<HTMLElement>(".motion-status");
  const announcement = document.querySelector<HTMLElement>(".manual-announcement");
  const faceButtons = document.querySelectorAll<HTMLButtonElement>("[data-select-face]");
  const physicalFaces = document.querySelectorAll<HTMLElement>(".plate-face");
  if (!object || !region || !plate || !controls || !toggle || !next || !status || !announcement || messages.length !== 4) return;

  const objectElement = object;
  const regionElement = region;
  const plateElement = plate;
  const controlsElement = controls;
  const toggleButton = toggle;
  const nextButton = next;
  const statusElement = status;
  const announcementElement = announcement;
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
  let pausedByUser = false;
  let hovered = false;
  let focused = false;
  let rotating = false;
  let timer: number | undefined;
  let completionTimer: number | undefined;

  function clearDwell() {
    window.clearTimeout(timer);
    timer = undefined;
  }

  function canAdvance() {
    return supports3D && !reducedPreference.matches && !pausedByUser && !hovered && !focused && !document.hidden && !rotating;
  }

  function updateControls() {
    const reduced = reducedPreference.matches || !supports3D;
    toggleButton.disabled = reduced;
    toggleButton.textContent = reduced ? "Hareket kapalı" : pausedByUser ? "Dönüşü başlat" : "Dönüşü durdur";
    toggleButton.setAttribute("aria-label", reduced ? "Azaltılmış hareket: otomatik dönüş kapalı" : pausedByUser ? "Otomatik dönüşü başlat" : "Otomatik dönüşü durdur");
    const temporaryPause = hovered || focused || document.hidden;
    statusElement.textContent = reduced ? "Anlık yüz seçimi" : pausedByUser ? "Elle yüz seçimi" : temporaryPause ? "Otomatik geçiş bekliyor" : "5 saniye okuma, ardından geçiş";
    objectElement.dataset.auto = canAdvance() ? "running" : "paused";
    const active = document.activeElement;
    for (const button of faceButtons) {
      button.setAttribute("aria-pressed", String(Number(button.dataset.selectFace) === face));
      button.setAttribute("aria-disabled", String(rotating));
      // Keep keyboard focus in place while ignoring input during a turn.
      button.disabled = rotating && !(focused && active === button);
    }
    nextButton.setAttribute("aria-disabled", String(rotating));
    nextButton.disabled = rotating && !(focused && active === nextButton);
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
    if (canAdvance()) timer = window.setTimeout(() => showFace((face + 1) % messages.length, false), dwellMs);
  }

  function finishRotation() {
    if (!rotating) return;
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
    face = (face + 1) % messages.length;
    angle -= 90;
    updateFace();
    rotating = true;
    objectElement.dataset.rotating = "true";
    updateControls();
    completionTimer = window.setTimeout(finishRotation, durationMs + 100);
  }

  function showFace(nextFace: number, manual: boolean) {
    if (rotating) return;
    if (manual) {
      announcementElement.textContent = messages[nextFace];
    }
    clearDwell();
    remainingSteps = (nextFace - face + messages.length) % messages.length;
    if (remainingSteps === 0) {
      schedule();
      return;
    }
    const instant = reducedPreference.matches || !supports3D;
    if (instant) {
      angle -= 90 * remainingSteps;
      face = nextFace;
      remainingSteps = 0;
      updateFace();
      schedule();
    } else step(); // Even a distant manual selection travels in 90° steps.
  }

  plateElement.addEventListener("transitionend", (event) => {
    if (event.target === plateElement && event.propertyName === "transform") finishRotation();
  });
  toggleButton.addEventListener("click", () => {
    pausedByUser = !pausedByUser;
    schedule();
  });
  nextButton.addEventListener("click", () => showFace((face + 1) % messages.length, true));
  for (const button of faceButtons) {
    button.addEventListener("click", () => {
      const target = Number(button.dataset.selectFace);
      if (Number.isInteger(target) && target >= 0 && target < messages.length) showFace(target, true);
    });
  }
  objectElement.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "mouse" || !finePointer.matches) return;
    hovered = true;
    schedule();
  });
  objectElement.addEventListener("pointerleave", () => {
    hovered = false;
    schedule();
  });
  function focusIn() {
    const active = document.activeElement;
    focused = regionElement.contains(active) || !!active?.matches(":focus-visible");
    schedule();
  }
  function focusOut() {
    window.setTimeout(() => {
      const active = document.activeElement;
      focused = regionElement.contains(active) || (controlsElement.contains(active) && !!active?.matches(":focus-visible"));
      schedule();
    }, 0);
  }
  regionElement.addEventListener("focusin", focusIn);
  regionElement.addEventListener("focusout", focusOut);
  controlsElement.addEventListener("focusin", focusIn);
  controlsElement.addEventListener("focusout", focusOut);
  controlsElement.addEventListener("pointerdown", () => {
    focused = false;
    schedule();
  });
  document.addEventListener("keydown", () => {
    if (controlsElement.contains(document.activeElement) || regionElement.contains(document.activeElement)) {
      focused = true;
      schedule();
    }
  });
  document.addEventListener("visibilitychange", schedule);
  reducedPreference.addEventListener("change", () => {
    clearDwell();
    window.clearTimeout(completionTimer);
    rotating = false;
    remainingSteps = 0;
    objectElement.dataset.rotating = "false";
    // A preference change is an instant presentation change, never a new flip.
    plateElement.style.transition = "none";
    objectElement.dataset.reduced = String(reducedPreference.matches || !supports3D);
    // Flush only on the discrete preference event, not on animation frames.
    plateElement.getBoundingClientRect();
    plateElement.style.transition = "";
    schedule();
  });
  finePointer.addEventListener("change", () => {
    hovered = false;
    schedule();
  });
  window.addEventListener("pagehide", () => {
    clearDwell();
    window.clearTimeout(completionTimer);
    rotating = false;
    remainingSteps = 0;
    objectElement.dataset.rotating = "false";
    // Settle at the requested readable face before a bfcache restore.
    plateElement.style.transition = "none";
  });
  window.addEventListener("pageshow", () => {
    plateElement.style.transition = "";
    schedule();
  });
  objectElement.dataset.reduced = String(reducedPreference.matches || !supports3D);
  controls.hidden = false;
  plateElement.style.setProperty("--rotation-duration", `${durationMs}ms`);
  window.requestAnimationFrame(() => {
    objectElement.dataset.ready = "true";
    schedule();
  });
}
