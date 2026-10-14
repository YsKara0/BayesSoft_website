import { GalleryShowcase } from "../../bs3p-project-showcase-r2/GalleryShowcase";
import { copy, text } from "../copy";
import type { HomepageProject } from "../project-data";

export function ProjectsShowcase({ projects }: Readonly<{ projects: readonly HomepageProject[] }>): string {
  let html = GalleryShowcase(projects, {
    id: "selected-projects", headingLevel: 2,
    className: "homepage-section homepage-projects",
    renderHeadingAction: () => text("allProjects", "a", 'class="homepage-link" href="/projeler"'),
  });
  html = html.replace('class="cy-kicker">Seçili projeler', 'class="cy-kicker" data-copy="selected">' + copy("selected"))
    .replace('id="selected-projects-title">İşlerimiz konuşsun.', 'id="selected-projects-title" data-copy="works">' + copy("works"))
    .replace('>3 proje · Özgün görsel konseptler<', ` data-copy="galleryCaption">${copy("galleryCaption")}<`)
    .replace('id="selected-projects-help" class="cy-sr-only"', 'id="selected-projects-help" class="cy-sr-only" data-copy="galleryHelp"')
    .replace('aria-label="Önceki proje"', `data-copy-aria="previous" aria-label="${copy("previous")}"`)
    .replace('aria-label="Sonraki proje"', `data-copy-aria="next" aria-label="${copy("next")}"`);
  const live = projects[0].liveHref;
  const liveLink = `<a class="homepage-live" data-live${live ? ` href="${live}"` : ' hidden'} target="_blank" rel="noopener noreferrer"><span data-copy="live">${copy("live")}</span> <span aria-hidden="true">↗</span></a>`;
  return html.replace(/ data-site-locale="tr"/g, "").replace(/(<a class="cy-detail"[^>]*>)[^<]+(<svg[\s\S]*?<\/a>)/, `$1<span data-copy="detail">${copy("detail")}</span>$2${liveLink}`);
}
