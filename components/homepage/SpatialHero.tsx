"use client";
import { MotionControl } from "./MotionControl";
import { HeroPrism } from "./HeroPrism";
import { HeroSystemScene } from "./HeroSystemScene";
import { useHomepageCopy } from "./useHomepageCopy";
export function SpatialHero() {
  const t = useHomepageCopy();
  return <section id="hero" className="homepage-hero">
    <MotionControl />
    <h1 className="sr-only">{t.hero0}</h1>{[t.hero1, t.hero2, t.hero3].map((text, i) =>
      <p className="sr-only" key={i}>{text}</p>)}<div className="plus-composition">
      <HeroPrism />
      <HeroSystemScene />
    </div>
    <div className="plus-footer">
      <ul className="service-labels" aria-label={t.services}>{(["web", "mobile", "ai", "custom"] as const).map(key =>
        <li key={key}>{t[key]}</li>)}</ul>
    </div>
  </section>;
}
