export function setText(element, value) {
    if (element && element.textContent !== value)
        element.textContent = value;
}
export function installLocale(dictionary) {
    let locale = "tr";
    const valid = (value) => value === "tr" || value === "en" || value === "de";
    const statusKeys = {
        "5 saniye okuma, ardından geçiş": "motionRead", "Otomatik geçiş": "motionRead",
        "Otomatik geçiş bekliyor": "motionPaused", "Elle yüz seçimi": "motionManual", "Anlık yüz seçimi": "motionReduced",
        "Sahne hazırlanıyor": "sceneLoading", "Statik yazılım sistemi": "sceneStatic", "Mobil statik yazılım sistemi": "sceneStatic",
        "Azaltılmış hareket: statik yazılım sistemi": "sceneStatic", "Veri, kurallar ve arayüzler oluşuyor": "scenePlaying", "Tamamlandı / sabit görünüm": "sceneFinal",
    };
    function translateStatus(element) {
        const key = statusKeys[element.textContent ?? ""];
        if (key)
            element.dataset.statusKey = key;
        const stored = element.dataset.statusKey;
        if (stored)
            setText(element, dictionary[locale].text[stored]);
    }
    const statuses = [...document.querySelectorAll(".motion-status,#scene-status")];
    const observers = statuses.map(element => {
        const observer = new MutationObserver(() => translateStatus(element));
        observer.observe(element, { childList: true, characterData: true, subtree: true });
        return observer;
    });
    document.querySelectorAll(".homepage-logo-target[aria-label]").forEach(element => {
        element.dataset.externalName = (element.getAttribute("aria-label") ?? "").replace(/ web sitesi.*$/, "");
    });
    function apply(next, persist = true) {
        locale = next;
        const copy = dictionary[locale].text;
        document.documentElement.lang = locale;
        document.querySelectorAll("[data-copy]").forEach(element => setText(element, copy[element.dataset.copy]));
        document.querySelectorAll("[data-copy-aria]").forEach(element => element.setAttribute("aria-label", copy[element.dataset.copyAria]));
        document.querySelectorAll("[data-locale]").forEach(button => {
            button.setAttribute("aria-pressed", String(button.dataset.locale === locale));
            button.setAttribute("aria-label", ({ tr: "Türkçe", en: "English", de: "Deutsch" })[button.dataset.locale]);
        });
        const messages = ["hero0", "hero1", "hero2", "hero3"].map(key => copy[key].replace(/\n/g, " "));
        window.__bs3pMessages.splice(0, 4, ...messages);
        document.querySelectorAll("[data-hero-copy]").forEach(element => {
            const lines = copy[element.dataset.heroCopy].split("\n");
            element.replaceChildren(...lines.flatMap((line, index) => index ? [document.createElement("br"), document.createTextNode(line)] : [document.createTextNode(line)]));
        });
        document.querySelectorAll("[data-hero-accessible]").forEach(element => setText(element, copy[element.dataset.heroAccessible].replace(/\n/g, " ")));
        document.querySelectorAll("[data-select-face]").forEach(button => button.setAttribute("aria-label", `${copy.face} ${Number(button.dataset.selectFace) + 1}: ${messages[Number(button.dataset.selectFace)]}`));
        document.querySelector(".interaction-region")?.setAttribute("aria-label", copy.prism);
        document.querySelector(".face-controls")?.setAttribute("aria-label", copy.selectFace);
        document.querySelectorAll(".wordmark").forEach(element => element.setAttribute("aria-label", copy.homeLabel));
        setText(document.querySelector(".skip-link"), copy.skip);
        document.querySelector("#hero")?.setAttribute("aria-label", copy.homeLabel);
        document.querySelector(".system-column")?.setAttribute("aria-label", copy.scene);
        document.querySelector(".scene")?.setAttribute("aria-label", copy.scene);
        const replay = document.querySelector("#scene-replay");
        replay?.setAttribute("aria-label", copy.replay);
        replay?.setAttribute("title", copy.replay);
        setText(replay?.querySelector("span") ?? null, copy.replay);
        setText(document.querySelector(".loading-placeholder span:last-child"), copy.sceneLoading);
        const serviceKeys = ["web", "mobile", "ai", "custom"];
        document.querySelectorAll(".service-labels li").forEach((element, index) => setText(element, copy[serviceKeys[index]]));
        document.querySelector(".service-labels")?.setAttribute("aria-label", copy.services);
        setText(document.querySelector("#references-title"), copy.references);
        document.querySelector(".homepage-logo-group:not([aria-hidden])")?.setAttribute("aria-label", copy.referenceGroup);
        document.querySelector(".homepage-logo-window")?.setAttribute("aria-label", copy.referenceRegion);
        document.querySelectorAll("[data-external-name]").forEach(element => element.setAttribute("aria-label", `${element.dataset.externalName} — ${copy.external}`));
        statuses.forEach(translateStatus);
        const activeFace = Number(document.querySelector(".architectural-object")?.dataset.face ?? 0);
        const announcement = document.querySelector(".manual-announcement");
        if (announcement?.textContent)
            setText(announcement, messages[activeFace]);
        document.title = `BayesSoft — ${copy.home}`;
        if (persist) {
            try {
                localStorage.setItem("bayessoft-locale", locale);
            }
            catch { /* In-memory selection still works. */ }
        }
        document.dispatchEvent(new CustomEvent("homepage-locale", { detail: locale }));
    }
    document.querySelectorAll("[data-locale]").forEach(button => button.addEventListener("click", () => {
        const next = button.dataset.locale;
        if (next && valid(next))
            apply(next);
    }));
    document.querySelectorAll(".mobile-nav a[href^='#']").forEach(link => link.addEventListener("click", () => {
        const menu = link.closest("details");
        if (menu)
            menu.open = false;
    }));
    let initial = null;
    try {
        initial = localStorage.getItem("bayessoft-locale");
    }
    catch { /* Browser preference fallback. */ }
    if (!valid(initial))
        initial = navigator.language.slice(0, 2).toLowerCase();
    apply(valid(initial) ? initial : "tr", false);
    window.addEventListener("pagehide", event => { if (!event.persisted)
        observers.forEach(observer => observer.disconnect()); });
    return { getLocale: () => locale };
}
