import type { ClientReference } from "@/data/references";

type ReferenceLogoShape = "horizontal" | "square" | "round";

const logoShapes: Readonly<Partial<Record<string, ReferenceLogoShape>>> = {
  "/references/arel.png": "round",
  "/references/kanuni_sultan_suleyman_hastanesi.png": "round",
  "/references/hypersense.png": "square",
};

export function referenceLogoShape(logo: ClientReference): ReferenceLogoShape {
  return logoShapes[logo.src] ?? "horizontal";
}
