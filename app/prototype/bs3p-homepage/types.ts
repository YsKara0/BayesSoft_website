export type SiteLink = Readonly<{ label: string; href: `/${string}` }>;
export type ServiceSummary = Readonly<{ title: string; description: string }>;
export type ApproachStep = Readonly<{ title: string; description: string }>;
export type ShowcaseProject = Readonly<{
  slug: string;
  name: string;
  description: string;
  category: string;
  detailHref: `/projeler/${string}`;
}>;
export type ProjectVisualRenderer = (project: ShowcaseProject) => string;
