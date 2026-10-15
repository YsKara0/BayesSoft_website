const figure = document.querySelector(".scene");
const replay = document.querySelector("#replay");
const settle = document.querySelector("#settle");
const status = document.querySelector("#motion-status");
const compact = matchMedia("(max-width: 899px)");
const reduced = matchMedia("(prefers-reduced-motion: reduce)");
let active;
let revision = 0;
let failed = false;
async function updatePolicy() {
    const current = ++revision;
    active?.dispose();
    active = undefined;
    figure.dataset.mode = "loading";
    figure.dataset.phase = "data";
    figure.dataset.ready = "false";
    const poster = figure.querySelector(".static-art");
    const host = figure.querySelector(".webgl-host");
    const overlays = figure.querySelector(".surface-overlays");
    poster.hidden = host.hidden = overlays.hidden = true;
    replay.disabled = settle.disabled = true;
    if (compact.matches || reduced.matches || failed) {
        figure.dataset.mode = "static";
        figure.dataset.phase = "final";
        poster.hidden = false;
        status.textContent = reduced.matches ? "Azaltılmış hareket / statik" : compact.matches ? "Mobil / statik görünüm" : "Statik alternatif";
        return;
    }
    status.textContent = "Sahne hazırlanıyor";
    try {
        const { createSystemScene } = await import("./scene.js");
        if (current !== revision || compact.matches || reduced.matches)
            return;
        const instance = createSystemScene(figure, replay, settle, status, () => {
            failed = true;
            void updatePolicy();
        });
        active = instance;
        const ready = await instance.ready;
        if (!ready || current !== revision || active !== instance) {
            instance.dispose();
            return;
        }
        instance.reveal();
    }
    catch (error) {
        console.warn("BS3P: statik alternatife geçildi", error);
        if (current !== revision)
            return;
        failed = true;
        active?.dispose();
        active = undefined;
        figure.dataset.mode = "static";
        poster.hidden = false;
        host.hidden = overlays.hidden = true;
        status.textContent = "Statik alternatif";
    }
}
compact.addEventListener("change", updatePolicy);
reduced.addEventListener("change", updatePolicy);
window.addEventListener("pagehide", () => { ++revision; active?.dispose(); active = undefined; });
window.addEventListener("pageshow", (event) => { if (event.persisted)
    void updatePolicy(); });
void updatePolicy();
export {};
