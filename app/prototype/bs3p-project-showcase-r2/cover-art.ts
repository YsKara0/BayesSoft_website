import type { GalleryProject } from "@/prototypes/bs3p-project-showcase/types";
import { escapeHtml } from "../bs3p-homepage/html";
import { operationsArtwork } from "./visuals/operations";
import { coachingArtwork } from "./visuals/coaching";
import { intelligenceArtwork } from "./visuals/intelligence";

export const COVER = Object.freeze({ width: 1280, height: 1600 });
const artwork = { operations: operationsArtwork, coaching: coachingArtwork, intelligence: intelligenceArtwork };

export function coverId(project: GalleryProject, id: string): string {
  return `${id}-${project.slug}-cover`;
}

// Each original drawing exists once; the curved strips reference its symbol.
export function coverDefinitions(projects: readonly GalleryProject[], id: string): string {
  return `<svg class="cy-definitions" width="0" height="0" aria-hidden="true" focusable="false"><defs>${projects.map(project => {
    const visual = project.visual;
    const content = visual.kind === "concept" ? artwork[visual.theme]()
      : `<image href="${escapeHtml(visual.src)}" width="${COVER.width}" height="${COVER.height}" preserveAspectRatio="xMidYMid meet"/>`;
    return `<symbol id="${escapeHtml(coverId(project, id))}" viewBox="0 0 ${COVER.width} ${COVER.height}">${content}</symbol>`;
  }).join("")}</defs></svg>`;
}
