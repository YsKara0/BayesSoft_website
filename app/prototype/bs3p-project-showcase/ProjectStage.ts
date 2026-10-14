import type { ShowcaseProject } from "@/prototypes/bs3p-project-showcase/types";
import { escapeHtml } from "../bs3p-homepage/html";
import { renderProjectVisual } from "./project-visuals";

export function ProjectStage(projects: readonly ShowcaseProject[], id: string): string {
  return `<figure class="ps-visual">
    <div class="ps-stage" data-stage data-mode="3d" tabindex="-1" role="group" aria-label="${escapeHtml(projects[0].name)} için görsel konsept" aria-describedby="${id}-caption ${id}-help">
      <div class="ps-frame" data-frame><div class="ps-rotor" data-rotor>
        ${projects.map((project, index) => `<div class="ps-face${index === 0 ? " is-current" : ""}" data-face data-slug="${escapeHtml(project.slug)}" style="--face-angle:${index * 120}deg" aria-hidden="true">${renderProjectVisual(project.visual)}</div>`).join("")}
      </div></div>
    </div>
    <figcaption id="${id}-caption">Özgün görsel konsept</figcaption>
    <p id="${id}-help" class="ps-sr-only">Projeyi değiştirmek için sol ve sağ ok tuşlarını veya önceki ve sonraki düğmelerini kullanın. Dokunmatik ekranda görseli yatay kaydırabilirsiniz.</p>
  </figure>`;
}
