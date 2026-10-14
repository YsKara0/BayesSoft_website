import { selectedProjects } from "../bs3p-project-showcase-r2/project-data";
import { projectDetails } from "@/data/projectDetails";
import { projects as siteProjects } from "@/data/site";
import type { GalleryProject } from "@/prototypes/bs3p-project-showcase/types";
import { homepageTranslations, type ProjectSlug } from "./i18n";

export type HomepageProject = Readonly<Omit<GalleryProject, "detailHref"> & {
  detailHref: `/projeler/${string}` | null;
  liveHref: string | null;
}>;

export const homepageProjects: readonly HomepageProject[] = selectedProjects.map(project => {
  const detail = projectDetails[project.slug];
  const site = siteProjects.find(item => item.slug === project.slug);
  const liveHref = detail?.liveUrl ?? site?.liveUrl ?? (project.detailHref?.startsWith("https://") ? project.detailHref : null);
  if (liveHref && new URL(liveHref).protocol !== "https:") throw new Error(`Invalid live URL: ${project.slug}`);
  return {
    ...project,
    ...homepageTranslations.tr.projects[project.slug as ProjectSlug],
    detailHref: detail && site?.hasDetailsPage && detail.slug === site.slug ? `/projeler/${detail.slug}` : null,
    liveHref,
  };
});
