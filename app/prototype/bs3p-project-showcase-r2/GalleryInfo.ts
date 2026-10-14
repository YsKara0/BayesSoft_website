import type { GalleryProject } from "@/prototypes/bs3p-project-showcase/types";
import { escapeHtml } from "../bs3p-homepage/html";

function GalleryControls(): string {
  return `<div class="cy-controls" data-controls hidden>
    <button type="button" data-direction="-1" aria-label="Önceki proje"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
    <button type="button" data-direction="1" aria-label="Sonraki proje"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
  </div>`;
}

export function GalleryInfo(project: GalleryProject, headingLevel: 2 | 3 = 2): string {
  const heading = `h${headingLevel}`;
  return `<div class="cy-info" data-info>
    <div class="cy-navigation"><p class="cy-index" data-index>01 / 03</p>${GalleryControls()}</div>
    <p class="cy-category" data-category>${escapeHtml(project.category)}</p>
    <${heading} class="cy-project-name" data-name>${escapeHtml(project.name)}</${heading}>
    <p class="cy-technology" data-technology>${escapeHtml(project.technologyLabel)}</p>
    <p class="cy-description" data-description>${escapeHtml(project.description)}</p>
    <a class="cy-detail" data-detail data-site-locale="tr"${project.detailHref ? ` href="${escapeHtml(project.detailHref)}"` : ' hidden style="display:none"'}>Projeyi inceleyin<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></a>
  </div>`;
}
