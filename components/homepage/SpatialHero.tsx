"use client";
import { useEffect, useState } from "react";
import { MobileHero } from "./MobileHero";
import styles from "./MobileHero.module.css";
import { MotionControl } from "./MotionControl";
import { HeroPrism } from "./HeroPrism";
import { HeroSystemScene } from "./HeroSystemScene";
import { useHomepageCopy } from "./useHomepageCopy";
function DesktopHeroContent() {
  const t = useHomepageCopy();
  return <>
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
  </>;
}

export function SpatialHero() {
  const [desktop, setDesktop] = useState(true);
  useEffect(() => {
    const media = matchMedia("(min-width: 900px)");
    const update = () => setDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return <section id="hero" className="homepage-hero">
    <div className={styles.desktop}>{desktop && <DesktopHeroContent />}</div>
    <MobileHero />
  </section>;
}
