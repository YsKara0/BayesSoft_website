import { mountCylindricalGallery } from "./controller.js";
import { requiredElement } from "../bs3p-project-showcase/dom.js";
function isProjectHref(value) {
    if (value === null)
        return true;
    if (typeof value !== "string")
        return false;
    if (value.startsWith("/projeler/"))
        return true;
    try {
        const url = new URL(value);
        return url.protocol === "https:" && !url.username && !url.password;
    }
    catch {
        return false;
    }
}
function readProjects(root) {
    const data = JSON.parse(requiredElement(root, "[data-projects]").textContent ?? "[]");
    const keys = ["slug", "name", "category", "description", "technologyLabel"];
    if (!Array.isArray(data) || data.length !== 3 || !data.every(item => {
        if (!item || typeof item !== "object")
            return false;
        const record = item;
        return keys.every(key => typeof record[key] === "string")
            && isProjectHref(record.detailHref)
            && record.visual !== null && typeof record.visual === "object";
    }))
        throw new Error("ProjectShowcase: invalid record contract.");
    return data;
}
document.querySelectorAll("[data-project-showcase]").forEach(root => {
    const controller = mountCylindricalGallery(root, readProjects(root));
    window.addEventListener("pagehide", event => { if (!event.persisted)
        controller.destroy(); });
});
