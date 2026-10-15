"use client";

import { useHomepageMotion } from "./MotionProvider";
import { useHomepageCopy } from "./useHomepageCopy";

export function MotionControl() {
  const { paused, reduced, ready, toggle } = useHomepageMotion();
  const t = useHomepageCopy();
  const label = paused ? t.resumeMotion : t.pauseMotion;

  return <>
    <button
      className="homepage-motion-control"
      type="button"
      onClick={toggle}
      aria-pressed={paused}
      aria-disabled={reduced || !ready}
      aria-controls="hero references"
      aria-describedby={reduced ? "homepage-motion-help" : undefined}
      title={reduced ? t.motionReducedInfo : label}
    >
      <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
        {paused
          ? <path d="m7 4 9 6-9 6Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          : <path d="M7 4v12M13 4v12" fill="none" stroke="currentColor" strokeWidth="1.6" />}
      </svg>
      <span>{label}</span>
    </button>
    {reduced && <span className="sr-only" id="homepage-motion-help">{t.motionReducedInfo}</span>}
  </>;
}
