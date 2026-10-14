import type { GalleryProject } from "@/prototypes/bs3p-project-showcase/types";
import { CYLINDER } from "@/prototypes/bs3p-project-showcase-r2/geometry";
import { escapeHtml } from "../bs3p-homepage/html";
import { COVER, coverId, coverDefinitions } from "./cover-art";

export function GalleryStage(projects: readonly GalleryProject[], id: string): string {
  const slices = (project: GalleryProject) => Array.from({ length: CYLINDER.strips }, (_, index) => {
    const angle = -CYLINDER.arc / 2 + CYLINDER.arc / CYLINDER.strips * (index + .5);
    const width = COVER.width / CYLINDER.strips;
    const overscan = width * (CYLINDER.overlap - 1) / 2;
    return `<div class="cy-strip" style="--strip-angle:${angle}deg" data-strip><svg viewBox="${index * width - overscan} 0 ${width * CYLINDER.overlap} ${COVER.height}" preserveAspectRatio="none" aria-hidden="true" focusable="false"><use href="#${escapeHtml(coverId(project, id))}" width="${COVER.width}" height="${COVER.height}"/></svg></div>`;
  }).join("");
  return `<figure class="cy-visual">${coverDefinitions(projects, id)}
    <div class="cy-viewport"><div class="cy-stage" data-stage tabindex="-1" role="group" aria-label="${escapeHtml(projects[0].name)} için görsel konsept" aria-describedby="${id}-caption ${id}-help">
      <div class="cy-ring" data-ring>${Array.from({ length: CYLINDER.slots }, (_, slot) => {
        const projectIndex = slot % projects.length;
        return `<div class="cy-panel${slot === 0 ? " is-current" : ""}" style="--slot-angle:${slot * CYLINDER.step}deg" data-panel data-slot="${slot}" data-project-index="${projectIndex}" aria-hidden="true">${slices(projects[projectIndex])}</div>`;
      }).join("")}</div><div class="cy-gesture" aria-hidden="true"></div>
    </div></div>
    <figcaption id="${id}-caption">3 proje · Özgün görsel konseptler</figcaption>
    <p id="${id}-help" class="cy-sr-only">Komşu yüzeyler aynı üç projenin döngüsel gösterimidir. Projeyi değiştirmek için sol ve sağ ok tuşlarını veya önceki ve sonraki düğmelerini kullanın. Dokunmatik ekranda görseli yatay kaydırabilirsiniz.</p>
  </figure>`;
}
