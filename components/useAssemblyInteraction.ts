"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import { advanceAssembly, type AssemblyEvent, type AssemblyPhase } from "./processAssemblyMotion";

export function useAssemblyInteraction() {
  const hitboxRef = useRef<HTMLDivElement>(null);
  const phaseRef = useRef<AssemblyPhase>("assembled");
  const consumedRef = useRef(false);
  const pointerRef = useRef(false);
  const enabledRef = useRef(false);
  const [phase, setPhase] = useState<AssemblyPhase>("assembled");
  const [interactive, setInteractive] = useState(false);
  const [travelScale, setTravelScale] = useState(1);

  const send = useCallback((event: AssemblyEvent) => {
    const next = advanceAssembly(phaseRef.current, event, pointerRef.current);
    if (next !== phaseRef.current) {
      phaseRef.current = next;
      setPhase(next);
    }
  }, []);

  useEffect(() => {
    const hitbox = hitboxRef.current;
    if (!hitbox) return;
    const capability = window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const geometry = hitbox.getBoundingClientRect();
    let previousWidth = geometry.width;
    let previousHeight = geometry.height;
    let observer: IntersectionObserver | undefined;

    const settle = () => {
      consumedRef.current = true;
      observer?.disconnect();
      send("reset");
    };
    const enabled = capability.matches && typeof ResizeObserver !== "undefined";
    enabledRef.current = enabled;
    setInteractive(enabled);
    setTravelScale(geometry.width < 850 ? .65 : 1);
    pointerRef.current = enabled && hitbox.matches(":hover");

    // SSR and restored-scroll encounters stay joined. Only an offscreen artwork
    // can be prepared without a visible joined-to-separated hydration flash.
    if (!enabled || consumedRef.current || geometry.top < window.innerHeight || typeof IntersectionObserver === "undefined") {
      settle();
      if (enabled && pointerRef.current) send("pointerEnter");
    } else {
      try {
        const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--bs-header-height")) || 88;
        observer = new IntersectionObserver(entries => {
          const entry = entries[0];
          if (!entry || consumedRef.current) return;
          if (entry.isIntersecting && entry.intersectionRatio >= .45) {
            consumedRef.current = true;
            observer?.disconnect();
            send("enter");
          } else if (entry.boundingClientRect.bottom <= 0) {
            settle();
          }
        }, { threshold: [.45], rootMargin: `-${header}px 0px 0px 0px` });
        observer.observe(hitbox);
        send("prepare");
      } catch {
        settle();
      }
    }

    const onCapabilityChange = () => {
      enabledRef.current = capability.matches && typeof ResizeObserver !== "undefined";
      setInteractive(enabledRef.current);
      pointerRef.current = false;
      settle();
    };
    capability.addEventListener("change", onCapabilityChange);
    const resize = typeof ResizeObserver !== "undefined" ? new ResizeObserver(entries => {
      const bounds = entries[0]?.target.getBoundingClientRect();
      if (!bounds) return;
      if (Math.abs(bounds.width - previousWidth) > .5 || Math.abs(bounds.height - previousHeight) > .5) {
        previousWidth = bounds.width;
        previousHeight = bounds.height;
        setTravelScale(bounds.width < 850 ? .65 : 1);
        pointerRef.current = false;
        settle();
      }
    }) : undefined;
    resize?.observe(hitbox);
    return () => {
      observer?.disconnect();
      resize?.disconnect();
      capability.removeEventListener("change", onCapabilityChange);
    };
  }, [send]);

  const onPointerEnter = (event: PointerEvent<HTMLDivElement>) => {
    if (!enabledRef.current || event.pointerType === "touch") return;
    pointerRef.current = true;
    send("pointerEnter");
  };
  const onPointerLeave = () => {
    pointerRef.current = false;
    send("pointerLeave");
  };
  const onLastPieceComplete = () => send("finished");

  return { hitboxRef, phase, interactive, travelScale, onPointerEnter, onPointerLeave, onLastPieceComplete };
}
