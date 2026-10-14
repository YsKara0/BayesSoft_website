import type { ShowcaseProject } from "@/prototypes/bs3p-project-showcase/types";
import { escapeHtml } from "../bs3p-homepage/html";
import { ProjectControls } from "./ProjectControls";

export function ProjectInfo(project: ShowcaseProject, headingLevel: 2 | 3 = 2): string {
  const heading = `h${headingLevel}`;
  return `<div class="ps-info" data-info>
    <div class="ps-info-navigation"><p class="ps-index" data-index>01 / 03</p>${ProjectControls()}</div>
    <p class="ps-category" data-category>${escapeHtml(project.category)}</p>
    <p class="ps-technology" data-technology>${escapeHtml(project.technologyLabel)}</p>
    <${heading} class="ps-project-name" data-name>${escapeHtml(project.name)}</${heading}>
    <p class="ps-description" data-description>${escapeHtml(project.description)}</p>
    <a class="ps-detail" data-detail data-site-locale="tr" href="${escapeHtml(project.detailHref)}">Projeyi incele<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></a>
  </div>`;
}
