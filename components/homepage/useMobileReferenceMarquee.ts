"use client";

import { useEffect, useRef } from "react";

const RESUME_DELAY = 1600;
const LOOP_DURATION = 120_000;

/** Native touch scrolling and a single clock; desktop keeps its CSS animation. */
export function useMobileReferenceMarquee(paused: boolean) {
  const windowRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(paused);
  const refreshRef = useRef<() => void>(() => {});

  useEffect(() => {
    const viewport = windowRef.current;
    if (!viewport) return;
    const track = viewport.querySelector<HTMLElement>(".homepage-logo-track")!;
    const group = track.querySelector<HTMLElement>(".homepage-logo-group:not([aria-hidden])")!;
    const mobile = matchMedia("(max-width: 699px)");
    const abort = new AbortController();
    let cycle = 0, frame = 0, previousTime = 0, expectedScroll = -1, offset = 0;
    let held = false, touching = false, focused = false, coolingDown = false, visible = false;
    let resumeTimer: ReturnType<typeof setTimeout> | undefined;

    function writeScroll(position: number) {
      // Keep fractional progress even when a DPR-1 browser rounds scrollLeft.
      offset = position;
      viewport!.scrollLeft = position;
      expectedScroll = viewport!.scrollLeft;
    }
    function normalize() {
      if (!cycle || focused || held) return;
      const position = viewport!.scrollLeft;
      if (position < cycle || position >= cycle * 2) {
        writeScroll(cycle + ((position % cycle) + cycle) % cycle);
      }
    }
    function tick(time: number) {
      if (previousTime) writeScroll(offset + cycle * Math.min(time - previousTime, 64) / LOOP_DURATION);
      previousTime = time;
      normalize();
      frame = requestAnimationFrame(tick);
    }
    function refresh() {
      cancelAnimationFrame(frame);
      previousTime = 0;
      if (mobile.matches && cycle && visible && !document.hidden && !pausedRef.current && !held && !focused && !coolingDown) {
        frame = requestAnimationFrame(tick);
      }
    }
    function resumeLater() {
      clearTimeout(resumeTimer);
      coolingDown = true;
      refresh();
      resumeTimer = setTimeout(() => {
        coolingDown = false;
        normalize();
        refresh();
      }, RESUME_DELAY);
    }
    function measure() {
      if (!mobile.matches) {
        cycle = 0;
        viewport!.style.removeProperty("--reference-viewport");
        writeScroll(0);
      } else {
        const oldCycle = cycle;
        const offset = oldCycle ? (viewport!.scrollLeft % oldCycle) / oldCycle : 0;
        viewport!.style.setProperty("--reference-viewport", `${viewport!.clientWidth}px`);
        cycle = group.getBoundingClientRect().width;
        if (!focused && !held) writeScroll(cycle * (1 + offset));
      }
      refresh();
    }
    const options = { signal: abort.signal };
    const hold = () => {
      if (!mobile.matches) return;
      held = true;
      clearTimeout(resumeTimer);
      refresh();
    };
    viewport.addEventListener("pointerdown", hold, { ...options, passive: true });
    viewport.addEventListener("touchstart", () => {
      touching = true;
      hold();
    }, { ...options, passive: true });
    const release = () => {
      if (!held || touching) return;
      held = false;
      resumeLater();
    };
    const touchRelease = (event: TouchEvent) => {
      if (event.touches.length) return;
      touching = false;
      release();
    };
    // Native panning cancels pointer events before the finger actually lifts.
    window.addEventListener("touchend", touchRelease, { ...options, passive: true });
    window.addEventListener("touchcancel", touchRelease, { ...options, passive: true });
    window.addEventListener("pointerup", release, options);
    window.addEventListener("pointercancel", release, options);
    viewport.addEventListener("scroll", () => {
      if (!mobile.matches || Math.abs(viewport.scrollLeft - expectedScroll) < 1) return;
      offset = viewport.scrollLeft;
      // Native momentum/trackpad scrolling extends the quiet period after touch.
      if (!held && !focused) resumeLater();
    }, { ...options, passive: true });
    viewport.addEventListener("focusin", event => {
      if (!mobile.matches || !(event.target instanceof HTMLElement) || !event.target.matches(":focus-visible")) return;
      focused = true;
      refresh();
    }, options);
    viewport.addEventListener("focusout", event => {
      if (event.relatedTarget instanceof Node && viewport.contains(event.relatedTarget)) return;
      focused = false;
      if (mobile.matches) resumeLater();
    }, options);
    document.addEventListener("visibilitychange", refresh, options);
    mobile.addEventListener("change", measure, options);
    const resize = new ResizeObserver(measure);
    resize.observe(viewport);
    const intersection = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      refresh();
    });
    intersection.observe(viewport);
    refreshRef.current = refresh;
    measure();
    return () => {
      abort.abort();
      resize.disconnect();
      intersection.disconnect();
      cancelAnimationFrame(frame);
      clearTimeout(resumeTimer);
      refreshRef.current = () => {};
    };
  }, []);

  useEffect(() => {
    pausedRef.current = paused;
    refreshRef.current();
  }, [paused]);

  return windowRef;
}
