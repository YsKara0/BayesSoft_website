/* eslint-disable @next/next/no-img-element -- Preserve the approved SVG fallback and layered logo artwork in static export. */
"use client";
import { useEffect, useRef, useState } from "react";
import type { CopyKey } from "@/data/homepage";
import { useHomepageMotion } from "./MotionProvider";
import { SystemLayers } from "./SystemLayers";
import { useHomepageCopy } from "./useHomepageCopy";
export function HeroSystemScene() {
  const t = useHomepageCopy();
  const { paused } = useHomepageMotion();
  const pausedRef = useRef(paused);
  pausedRef.current = paused;
  const policy = useRef<((paused: boolean) => void) | undefined>(undefined);
  const root = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<CopyKey>("sceneLoading");
  useEffect(() => {
    const section = root.current!;
    const figure = section.querySelector<HTMLElement>(".scene")!;
    const replay = section.querySelector<HTMLButtonElement>(".scene-replay")!;
    const settle = section.querySelector<HTMLButtonElement>("[data-final]")!;
    const statusNode = section.querySelector<HTMLElement>("[role=status]")!;
    const poster = figure.querySelector<HTMLImageElement>(".static-art")!;
    const host = figure.querySelector<HTMLElement>(".webgl-host")!;
    const overlays = figure.querySelector<HTMLElement>(".surface-overlays")!;
    const compact = matchMedia("(max-width: 899px)");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const abort = new AbortController();
    let active: ReturnType<typeof import("@/lib/homepage/system/scene").createSystemScene> | undefined;
    let generation = 0;
    let failed = false;
    let disposed = false;
    async function updatePolicy() {
      const current = ++generation; active?.dispose(); active = undefined;
      figure.dataset.mode = "loading"; figure.dataset.ready = "false"; figure.dataset.phase = "data";
      poster.hidden = host.hidden = overlays.hidden = true; replay.disabled = settle.disabled = true; replay.hidden = false;
      if (compact.matches || reduced.matches || failed || pausedRef.current) { figure.dataset.mode = "static"; figure.dataset.phase = "final"; poster.hidden = false; replay.hidden = true; setStatus(pausedRef.current && !reduced.matches ? "scenePaused" : "sceneStatic"); return; }
      setStatus("sceneLoading");
      try {
        const { createSystemScene } = await import("@/lib/homepage/system/scene");
        if (disposed || current !== generation) return;
        if (pausedRef.current) { void updatePolicy(); return; }
        const instance = createSystemScene(figure, replay, settle, statusNode, () => { failed = true; void updatePolicy(); }, setStatus); active = instance;
        if (!await instance.ready || disposed || current !== generation || active !== instance) { instance.dispose(); return; }
        if (pausedRef.current) { void updatePolicy(); return; }
        instance.reveal();
      } catch (error) { if (disposed || current !== generation) return; console.warn("Homepage scene: static fallback", error); failed = true; void updatePolicy(); }
    }
    compact.addEventListener("change", updatePolicy, { signal: abort.signal }); reduced.addEventListener("change", updatePolicy, { signal: abort.signal });
    window.addEventListener("pagehide", () => { ++generation; active?.dispose(); active = undefined; }, { signal: abort.signal });
    window.addEventListener("pageshow", event => { if (event.persisted) void updatePolicy(); }, { signal: abort.signal });
    policy.current = next => {
      if (active && figure.dataset.ready === "true") active.setPaused(next);
      else void updatePolicy();
    };
    void updatePolicy(); return () => { policy.current = undefined; disposed = true; ++generation; abort.abort(); active?.dispose(); };
  }, []);
  useEffect(() => policy.current?.(paused), [paused]);
  return <section className="system-column" aria-label={t.scene} ref={root}>
    <figure className="scene" data-mode="loading" data-ready="false" data-phase="data" role="img" aria-label={t.scene}>
      <div className="loading-placeholder" aria-hidden="true">
        <span className="loading-seat" />
        <span>{t.sceneLoading}</span>
      </div>
      <img className="static-art" src="/hero/system-static.svg" width="960" height="540" alt="" decoding="async" fetchPriority="high" loading="eager" />
      <div className="webgl-host" aria-hidden="true" hidden />
      <div className="surface-overlays" aria-hidden="true" hidden>
        <SystemLayers />
      </div>
      <noscript>
        <img src="/hero/system-static.svg" width="960" height="540" alt={t.scene} />
      </noscript>
    </figure>
    <button className="scene-replay" type="button" aria-label={t.replay} title={t.replay} disabled>
      <span className="sr-only">{t.replay}</span>
    </button>
    <button data-final type="button" hidden tabIndex={-1} aria-hidden="true" />
    <p className="sr-only" role="status" aria-live="polite">{t[status]}</p>
  </section>;
}
