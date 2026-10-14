import { mountCylindricalGallery } from "../bs3p-project-showcase-r2/controller.js";
import { setText } from "./locale.js";
import type { Locale } from "../../data/i18n";
import type { HomepageLocale, ProjectSlug } from "../../app/prototype/bs3p-homepage/i18n";
import type { HomepageProject } from "../../app/prototype/bs3p-homepage/project-data";

export function installHomepageGallery(dictionary: Record<Locale, HomepageLocale>, getLocale: () => Locale) {
  const root = document.querySelector<HTMLElement>("#selected-projects")!;
  const projects = JSON.parse(root.querySelector("[data-projects]")!.textContent!) as HomepageProject[];
  const originalTechnology = projects.map(project => project.technologyLabel);
  const controller = mountCylindricalGallery(root, projects);
  function sync() {
    const locale = getLocale();
    const copy = dictionary[locale].text;
    // Keep the same array references read by the shared controller throughout its lifecycle.
    projects.forEach((project, index) => Object.assign(project, dictionary[locale].projects[project.slug as ProjectSlug], {
      technologyLabel: dictionary[locale].projects[project.slug as ProjectSlug].technologyLabel ?? originalTechnology[index],
    }));
    if (root.dataset.phase !== "idle") return;
    const project = projects[controller.getState().activeIndex];
    setText(root.querySelector("[data-category]"), project.category);
    setText(root.querySelector("[data-description]"), project.description);
    setText(root.querySelector("[data-technology]"), project.technologyLabel);
    const detail = root.querySelector<HTMLAnchorElement>("[data-detail]")!;
    detail.setAttribute("aria-label", `${project.name} — ${copy.detail}`);
    const live = root.querySelector<HTMLAnchorElement>("[data-live]")!;
    live.hidden = !project.liveHref;
    if (project.liveHref) live.href = project.liveHref; else live.removeAttribute("href");
    live.setAttribute("aria-label", `${project.name} — ${copy.live}. ${copy.external}`);
    live.title = copy.external;
    root.querySelector("[data-stage]")?.setAttribute("aria-label", `${project.name} — ${copy.gallery}`);
    setText(root.querySelector("#selected-projects-help"), copy.galleryHelp);
    setText(root.querySelector("[data-announcement]"), `${controller.getState().activeIndex + 1} / 3: ${project.name}. ${project.category}.`);
  }
  document.addEventListener("homepage-locale", sync);
  const observer = new MutationObserver(sync);
  observer.observe(root, { attributes: true, attributeFilter: ["data-phase", "data-active-index"] });
  sync();
  window.addEventListener("pagehide", event => {
    if (!event.persisted) { observer.disconnect(); document.removeEventListener("homepage-locale", sync); controller.destroy(); }
  });
}
