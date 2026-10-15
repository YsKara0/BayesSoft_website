"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { initializeSpatialHero } from "@/lib/homepage/prism";
import type { CopyKey } from "@/data/homepage";
import { useHomepageMotion } from "./MotionProvider";
import { useHomepageCopy } from "./useHomepageCopy";
export function HeroPrism() {
  const t = useHomepageCopy();
  const { paused } = useHomepageMotion();
  const pausedRef = useRef(paused);
  pausedRef.current = paused;
  const controller = useRef<ReturnType<typeof initializeSpatialHero>>(undefined);
  const root = useRef<HTMLDivElement>(null);
  const copy = useRef(t); copy.current = t;
  const [status, setStatus] = useState<CopyKey>("motionRead");
  const [announcement, setAnnouncement] = useState<number | null>(null);
  const messages = [t.hero0, t.hero1, t.hero2, t.hero3];
  useEffect(() => {
    controller.current = initializeSpatialHero(root.current!, () => [copy.current.hero0, copy.current.hero1, copy.current.hero2, copy.current.hero3], setStatus, setAnnouncement, pausedRef.current);
    return () => controller.current?.destroy();
  }, []);
  useEffect(() => controller.current?.setPaused(paused), [paused]);
  return <div className="prism-column" ref={root}>
    <section className="interaction-region" aria-label={t.prism}>
      <div className="architectural-object" data-face="0" data-angle="0" data-reduced="false" aria-hidden="true">
        <div className="plate-space">
          <div className="rotating-plate">{messages.map((message, i) => <div className={`plate-face face-${i}`} key={i} data-active={i === 0}>
            <p className="face-heading">{message.split("\n").map((line, index) => <Fragment key={index}>{index > 0 && <br />}{line}</Fragment>)}</p>
          </div>)}<div className="prism-end end-left" />
            <div className="prism-end end-right" />
          </div>
        </div>
      </div>
    </section>
    <div className="motion-controls">
      <div className="face-controls" role="group" aria-label={t.selectFace}>{messages.map((message, i) => <button key={i} type="button" data-select-face={i} aria-label={`${t.face} ${i + 1}: ${message}`} aria-pressed={i === 0}>
        <span className="face-dot" aria-hidden="true" />
      </button>)}</div>
      <p className="motion-status sr-only">{t[status]}</p>
      <p className="sr-only manual-announcement" role="status" aria-live="polite" aria-atomic="true">{announcement === null ? "" : messages[announcement]}</p>
    </div>
  </div>;
}
