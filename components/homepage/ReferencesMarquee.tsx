/* eslint-disable @next/next/no-img-element -- Preserve the approved SVG fallback and layered logo artwork in static export. */
"use client";
import { clientReferences } from "@/data/references";
import { referenceWebsite } from "@/lib/homepage/reference-links";
import { referenceLogoShape } from "@/lib/homepage/reference-sizing";
import { useHomepageCopy } from "./useHomepageCopy";
export function ReferencesMarquee() {
  const t = useHomepageCopy();
  return <section id="references" className="homepage-references homepage-band" aria-labelledby="references-title">
    <h2 id="references-title">{t.references}</h2>
    <div className="homepage-logo-window" role="region" aria-label={t.referenceRegion}>
      <div className="homepage-logo-track">{[false, true].map(duplicate =>
        <ul key={String(duplicate)} className="homepage-logo-group" aria-hidden={duplicate || undefined} aria-label={duplicate ? undefined : t.referenceGroup}>{clientReferences.map(logo => {
          const website = referenceWebsite(logo);
          const artwork = <span className="homepage-logo-artwork" aria-hidden="true">{["neutral", "color"].map(kind =>
            <img key={kind} className={`homepage-logo-${kind}`} src={logo.src} alt="" aria-hidden="true" width="176" height="64" loading="eager" fetchPriority="low" decoding="async" />)}</span>;
          return <li className={`homepage-logo homepage-logo-${referenceLogoShape(logo)}${logo.dark ? " homepage-logo-dark" : ""}`} key={logo.src}>{website ? <a className="homepage-logo-target" href={website} target="_blank" rel="noopener noreferrer" tabIndex={duplicate ? -1 : undefined} aria-label={`${logo.name} — ${t.external}`}>{artwork}</a> : <span className="homepage-logo-target" tabIndex={duplicate ? undefined : 0} role="img" aria-label={logo.name}>{artwork}</span>}</li>;
        })}</ul>)}</div>
    </div>
  </section>;
}
