"use client";
import { useHomepageCopy } from "./useHomepageCopy";
export function Services() {
  const t = useHomepageCopy(); return <section id="services" className="homepage-section homepage-services homepage-band" aria-labelledby="services-title">
    <h2 id="services-title">{t.services}</h2>
    <div className="homepage-service-grid">{(["web", "mobile", "ai", "custom"] as const).map(key =>
      <article className="homepage-service" key={key}>
        <h3>{t[`${key}Title`]}</h3>
        <p>{t[`${key}Body`]}</p>
      </article>)}</div>
  </section>;
}
