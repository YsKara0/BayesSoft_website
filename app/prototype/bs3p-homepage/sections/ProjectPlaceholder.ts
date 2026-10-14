import type { ShowcaseProject } from "../types";

/** Only the visual renderer will be replaced by the future interactive scene. */
export function ProjectPlaceholder(_project: ShowcaseProject): string {
  return `<div class="homepage-project-placeholder" aria-hidden="true">
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none" aria-hidden="true"><path d="M6 9h20v15H6zM6 20l6-6 5 5 3-3 6 6" stroke="currentColor" stroke-width="1.1"/><circle cx="22" cy="13" r="1.5" fill="currentColor"/></svg>
    <span>Proje görseli</span>
  </div>`;
}
