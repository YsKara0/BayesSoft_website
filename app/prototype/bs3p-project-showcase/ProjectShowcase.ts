import type { ShowcaseProject } from "@/prototypes/bs3p-project-showcase/types";
import { escapeHtml } from "../bs3p-homepage/html";
import { ProjectStage } from "./ProjectStage";
import { ProjectInfo } from "./ProjectInfo";

export type ProjectShowcaseProps = Readonly<{ id: string; projects: readonly ShowcaseProject[]; headingLevel?: 1 | 2 }>;

export function ProjectShowcase({ id, projects, headingLevel = 1 }: ProjectShowcaseProps): string {
  if (projects.length !== 3) throw new Error("ProjectShowcase requires three verified project planes.");
  const heading = `h${headingLevel}`;
  const json = JSON.stringify(projects).replace(/</g, "\\u003c");
  return `<section class="ps-showcase" id="${escapeHtml(id)}" data-project-showcase data-phase="idle" data-active-index="0" aria-labelledby="${id}-title">
    <div class="ps-heading"><p class="ps-kicker">Seçili projeler</p><${heading} class="ps-title" id="${id}-title">İşlerimiz konuşsun.</${heading}></div>
    <div class="ps-layout">${ProjectStage(projects, id)}${ProjectInfo(projects[0], headingLevel === 1 ? 2 : 3)}</div>
    <p class="ps-sr-only" data-announcement role="status" aria-live="polite" aria-atomic="true"></p>
    <script type="application/json" data-projects>${json}</script>
    <noscript><p>İlk projenin görselini ve detay bağlantısını inceleyebilirsiniz.</p></noscript>
  </section>`;
}
