import type { ProjectVisual } from "@/prototypes/bs3p-project-showcase/types";
import { escapeHtml } from "../bs3p-homepage/html";
import { operationsCover } from "./visuals/operations";
import { coachingCover } from "./visuals/coaching";
import { intelligenceCover } from "./visuals/intelligence";

export function renderProjectVisual(visual: ProjectVisual): string {
  if (visual.kind === "image") {
    return `<img src="${escapeHtml(visual.src)}" alt="" width="1600" height="1000" decoding="async">`;
  }
  const covers = { operations: operationsCover, coaching: coachingCover, intelligence: intelligenceCover };
  return covers[visual.theme]();
}
