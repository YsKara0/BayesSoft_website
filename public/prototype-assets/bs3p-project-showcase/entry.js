import { mountProjectShowcase } from "./controller.js";
import { requiredElement } from "./dom.js";
function readProjects(root) {
    const data = JSON.parse(requiredElement(root, "[data-projects]").textContent ?? "[]");
    const keys = ["slug", "name", "category", "description", "detailHref", "technologyLabel"];
    if (!Array.isArray(data) || data.length !== 3 || !data.every(item => {
        if (!item || typeof item !== "object")
            return false;
        const record = item;
        return keys.every(key => typeof record[key] === "string")
            && String(record.detailHref).startsWith("/projeler/")
            && record.visual !== null && typeof record.visual === "object";
    }))
        throw new Error("ProjectShowcase: invalid record contract.");
    return data;
}
document.querySelectorAll("[data-project-showcase]").forEach(root => {
    const controller = mountProjectShowcase(root, readProjects(root));
    window.addEventListener("pagehide", event => { if (!event.persisted)
        controller.destroy(); });
});
