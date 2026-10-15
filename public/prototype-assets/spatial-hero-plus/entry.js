// The production provider reads this exact preference on the next page load.
// No invented /en or /de routes; the TR-only prototype stays explicitly TR.
document.querySelectorAll("[data-site-locale]").forEach(link => {
    link.addEventListener("click", event => {
        const locale = link.dataset.siteLocale;
        if (!locale || !["tr", "en", "de"].includes(locale))
            return;
        try {
            localStorage.setItem("bayessoft-locale", locale);
        }
        catch {
            if (locale === "tr")
                return;
            event.preventDefault();
            const note = document.querySelector("#prototype-language-note");
            note.classList.remove("sr-only");
            note.textContent = "Dil tercihi kaydedilemedi. Tarayıcıda site depolamasına izin verin.";
        }
    });
});
const menu = document.querySelector(".mobile-nav");
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu.open) {
        menu.open = false;
        menu.querySelector("summary")?.focus();
    }
});
document.addEventListener("pointerdown", event => {
    if (menu.open && !menu.contains(event.target))
        menu.open = false;
});
const figure = document.querySelector(".scene");
const replay = document.querySelector("#scene-replay");
// The unchanged R1 renderer takes a final-state control. Its adapter stays hidden.
const finalState = document.querySelector("#scene-final-state");
const statusText = document.querySelector("#scene-status");
const compact = matchMedia("(max-width: 899px)");
const reduced = matchMedia("(prefers-reduced-motion: reduce)");
let active;
let generation = 0;
let failed = false;
async function updatePolicy() {
    const current = ++generation;
    active?.dispose();
    active = undefined;
    figure.dataset.mode = "loading";
    figure.dataset.ready = "false";
    figure.dataset.phase = "data";
    const poster = figure.querySelector(".static-art");
    const host = figure.querySelector(".webgl-host");
    const overlays = figure.querySelector(".surface-overlays");
    poster.hidden = host.hidden = overlays.hidden = true;
    replay.disabled = finalState.disabled = true;
    replay.hidden = false;
    if (compact.matches || reduced.matches || failed) {
        figure.dataset.mode = "static";
        figure.dataset.phase = "final";
        poster.hidden = false;
        replay.hidden = true;
        statusText.textContent = reduced.matches ? "Azaltılmış hareket: statik yazılım sistemi" : compact.matches ? "Mobil statik yazılım sistemi" : "Statik yazılım sistemi";
        return;
    }
    statusText.textContent = "Sahne hazırlanıyor";
    try {
        // Load the original R1 browser module in place. No duplicated scene, geometry,
        // materials, camera or timeline; import-map resolves its existing Three.js.
        const moduleURL = "/prototype-assets/bs3p-right-3d/scene.js";
        const module = await import(moduleURL);
        if (current !== generation || compact.matches || reduced.matches)
            return;
        const instance = module.createSystemScene(figure, replay, finalState, statusText, () => {
            failed = true;
            void updatePolicy();
        });
        active = instance;
        const ready = await instance.ready;
        if (!ready || current !== generation || active !== instance) {
            instance.dispose();
            return;
        }
        instance.reveal();
    }
    catch (error) {
        console.warn("Spatial Hero Plus: statik alternatif", error);
        if (current !== generation)
            return;
        failed = true;
        active?.dispose();
        active = undefined;
        figure.dataset.mode = "static";
        figure.dataset.phase = "final";
        poster.hidden = false;
        host.hidden = overlays.hidden = true;
        replay.hidden = true;
        statusText.textContent = "Statik yazılım sistemi";
    }
}
compact.addEventListener("change", updatePolicy);
reduced.addEventListener("change", updatePolicy);
window.addEventListener("pagehide", () => { ++generation; active?.dispose(); active = undefined; });
window.addEventListener("pageshow", event => { if (event.persisted)
    void updatePolicy(); });
void updatePolicy();
export {};
