export type ConceptTheme = "operations" | "coaching" | "intelligence";
export type ProjectVisual = Readonly<
  | { kind: "concept"; theme: ConceptTheme; label: string }
  | { kind: "image"; src: string; label: string }
>;

// Base fields are structurally compatible with the homepage ShowcaseProject.
export type ShowcaseProject = Readonly<{
  slug: string;
  name: string;
  category: string;
  description: string;
  detailHref: `/projeler/${string}`;
  technologyLabel: string;
  visual: ProjectVisual;
}>;

// Gallery entries can exist before a project detail page is available.
export type GalleryProject = Readonly<Omit<ShowcaseProject, "detailHref"> & {
  detailHref: ShowcaseProject["detailHref"] | `https://${string}` | null;
}>;

export type Direction = -1 | 1;
export type ShowcaseState = Readonly<{
  phase: "idle" | "transition";
  activeIndex: number;
  fromIndex: number;
  toIndex: number;
  direction: Direction;
  step: number;
  targetStep: number;
}>;

export type ShowcaseController = Readonly<{
  navigate: (direction: Direction) => void;
  getState: () => ShowcaseState;
  destroy: () => void;
}>;
