"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const STORAGE_KEY = "bayessoft-motion";
type Preference = "running" | "paused";
type MotionState = { paused: boolean; reduced: boolean; ready: boolean; toggle: () => void };
const MotionContext = createContext<MotionState | null>(null);

export function MotionProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] = useState<Preference>("running");
  const [reduced, setReduced] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const abort = new AbortController();
    try {
      setPreference(localStorage.getItem(STORAGE_KEY) === "paused" ? "paused" : "running");
    } catch { /* The in-memory preference also works with blocked storage. */ }
    setReduced(media.matches);
    setReady(true);
    media.addEventListener("change", () => setReduced(media.matches), { signal: abort.signal });
    window.addEventListener("storage", event => {
      if (event.key === STORAGE_KEY) setPreference(event.newValue === "paused" ? "paused" : "running");
    }, { signal: abort.signal });
    return () => abort.abort();
  }, []);

  // System reduction takes precedence, including over an explicit saved resume.
  const paused = !ready || reduced || preference === "paused";
  const value = useMemo<MotionState>(() => ({
    paused, reduced, ready,
    toggle() {
      if (!ready || reduced) return;
      const next = paused ? "running" : "paused";
      setPreference(next);
      try { localStorage.setItem(STORAGE_KEY, next); }
      catch { /* Keep the explicit choice for this mounted page. */ }
    },
  }), [paused, reduced, ready]);

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function useHomepageMotion() {
  const state = useContext(MotionContext);
  if (!state) throw new Error("Homepage motion requires MotionProvider");
  return state;
}
