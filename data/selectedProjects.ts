import { projects } from "./site";
import { projectDetails } from "./projectDetails";
import { translations, type Locale } from "./i18n";
import type { ProjectSlug } from "./homepage";

export type SelectedProject = Readonly<{
  id: ProjectSlug;
  name: string;
  category: string;
  description: string;
  posterSrc: `/projects/covers/${string}`;
  posterSmallSrc: `/projects/covers/${string}`;
  detailHref: `/projeler/${string}` | null;
  liveHref: `https://${string}` | null;
  technologyLabels: readonly string[];
}>;

const furtherup = projects.find(project => project.slug === "furtherup-drive");
const furtherupDetail = projectDetails["furtherup-drive"];
if (!furtherup?.hasDetailsPage || !furtherupDetail || furtherup.slug !== furtherupDetail.slug) {
  throw new Error("Selected projects: FurtherUp detail source is missing.");
}
if (!furtherup.liveUrl?.startsWith("https://") || furtherup.liveUrl !== furtherupDetail.liveUrl) {
  throw new Error("Selected projects: FurtherUp live URL sources disagree.");
}

type ProjectSource = Omit<SelectedProject, "category" | "description">;
const sources: readonly ProjectSource[] = [
  {
    id: "furtherup-drive", name: "FurtherUp Drive",
    posterSrc: "/projects/covers/furtherup-drive-cover-large.webp",
    posterSmallSrc: "/projects/covers/furtherup-drive-cover-640.webp",
    detailHref: `/projeler/${furtherupDetail.slug}`,
    liveHref: furtherup.liveUrl as `https://${string}`,
    technologyLabels: furtherupDetail.techStack.slice(0, 2),
  },
  {
    id: "reviel", name: "Reviel", posterSrc: "/projects/covers/reviel-cover-large.webp",
    posterSmallSrc: "/projects/covers/reviel-cover-640.webp",
    detailHref: null, liveHref: "https://www.reviel.com.tr/",
    // Supplied project evidence; no unverified framework/database version.
    technologyLabels: ["ASP.NET", "HTML", "CSS", "JavaScript", "C#"],
  },
  {
    id: "metek-makina", name: "Metek Makina", posterSrc: "/projects/covers/metek-makina-cover-large.webp",
    posterSmallSrc: "/projects/covers/metek-makina-cover-640.webp",
    detailHref: null, liveHref: "https://metekmakina.com/urunler",
    technologyLabels: [],
  },
];

export function getSelectedProjects(locale: Locale): readonly SelectedProject[] {
  return sources.map(source => {
    const copy = translations[locale].homepage.projects[source.id];
    return {
      ...source, category: copy.category, description: copy.description,
      technologyLabels: copy.technologyLabel ? [copy.technologyLabel] : source.technologyLabels,
    };
  });
}

export const selectedProjects = getSelectedProjects("tr");
