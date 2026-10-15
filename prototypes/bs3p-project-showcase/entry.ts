import { mountProjectShowcase } from "./controller.js";
import { requiredElement } from "./dom.js";
import type { ShowcaseProject } from "./types.js";

function readProjects(root: HTMLElement): readonly ShowcaseProject[] {
  const data: unknown = JSON.parse(requiredElement<HTMLScriptElement>(root, "[data-projects]").textContent ?? "[]");
  const keys = ["slug", "name", "category", "description", "detailHref", "technologyLabel"];
  if (!Array.isArray(data) || data.length !== 3 || !data.every(item => {
    if (!item || typeof item !== "object") return false;
    const record = item as Record<string, unknown>;
    return keys.every(key => typeof record[key] === "string")
      && String(record.detailHref).startsWith("/projeler/")
      && record.visual !== null && typeof record.visual === "object";
  })) throw new Error("ProjectShowcase: invalid record contract.");
  return data as readonly ShowcaseProject[];
}

document.querySelectorAll<HTMLElement>("[data-project-showcase]").forEach(root => {
  const controller = mountProjectShowcase(root, readProjects(root));
  window.addEventListener("pagehide", event => { if (!event.persisted) controller.destroy(); });
});
