import type { GalleryProject } from "@/prototypes/bs3p-project-showcase/types";
import { GalleryStage } from "./GalleryStage";
import { GalleryInfo } from "./GalleryInfo";
import { escapeHtml } from "../bs3p-homepage/html";

export type GalleryShowcaseOptions = Readonly<{ id?: string; headingLevel?: 1 | 2; className?: string; renderHeadingAction?: () => string }>;

export function GalleryShowcase(projects: readonly GalleryProject[], { id = "cylindrical-showcase", headingLevel = 1, className = "", renderHeadingAction }: GalleryShowcaseOptions = {}): string {
  if (projects.length !== 3) throw new Error("Cylindrical showcase requires the three verified project records.");
  const heading = `h${headingLevel}`;
  const classes = `cy-showcase${className ? ` ${className}` : ""}`;
  const json = JSON.stringify(projects).replace(/</g, "\\u003c");
  return `<section class="${escapeHtml(classes)}" id="${escapeHtml(id)}" data-project-showcase data-phase="idle" data-active-index="0" aria-labelledby="${escapeHtml(id)}-title">
    <div class="cy-heading"><p class="cy-kicker">Seçili projeler</p><${heading} id="${escapeHtml(id)}-title">İşlerimiz konuşsun.</${heading}>${renderHeadingAction?.() ?? ""}</div>
    <div class="cy-layout">${GalleryStage(projects, id)}${GalleryInfo(projects[0], headingLevel === 1 ? 2 : 3)}</div>
    <p class="cy-sr-only" data-announcement role="status" aria-live="polite" aria-atomic="true"></p>
    <script type="application/json" data-projects>${json}</script>
    <noscript><p>${projects[0].detailHref ? "İlk projenin görselini ve detay bağlantısını inceleyebilirsiniz." : "İlk projenin görselini inceleyebilirsiniz."}</p></noscript>
  </section>`;
}
