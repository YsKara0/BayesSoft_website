import type { ClientReference } from "@/data/references";
import { escapeHtml } from "../html";
import { referenceWebsite } from "../reference-links";
import { referenceLogoShape } from "../reference-sizing";

function logoTarget(logo: ClientReference, duplicate: boolean): string {
  const website = referenceWebsite(logo);
  const imageAttributes = `src="${escapeHtml(logo.src)}" alt="" aria-hidden="true" width="176" height="64" loading="eager" fetchpriority="low" decoding="async"`;
  const image = `<span class="homepage-logo-artwork" aria-hidden="true"><img class="homepage-logo-neutral" ${imageAttributes}><img class="homepage-logo-color" ${imageAttributes}></span>`;
  if (website) {
    return `<a class="homepage-logo-target" href="${escapeHtml(website)}" target="_blank" rel="noopener noreferrer"${duplicate ? ' tabindex="-1"' : ` aria-label="${escapeHtml(logo.name)} web sitesi (yeni sekmede açılır)"`}>${image}</a>`;
  }
  // A logo without a verified URL remains an image, never a dummy link.
  return `<span class="homepage-logo-target"${duplicate ? "" : ` tabindex="0" role="img" aria-label="${escapeHtml(logo.name)}"`}>${image}</span>`;
}

export function References(logos: readonly ClientReference[]): string {
  function group(duplicate: boolean) {
    return `<ul class="homepage-logo-group"${duplicate ? ' aria-hidden="true"' : ' aria-label="Mevcut site referansları"'}>${logos.map(logo => `
      <li class="homepage-logo homepage-logo-${referenceLogoShape(logo)}${logo.dark ? " homepage-logo-dark" : ""}">
        ${logoTarget(logo, duplicate)}
      </li>`).join("")}</ul>`;
  }
  return `<section id="references" class="homepage-references homepage-band" aria-labelledby="references-title">
    <h2 id="references-title">Referanslar</h2>
    <div class="homepage-logo-window" role="region" aria-label="Referans logoları. Akış, fare üzerindeyken veya bir logo klavye odağındayken duraklar.">
      <div class="homepage-logo-track">${group(false)}${group(true)}</div>
    </div>
  </section>`;
}
