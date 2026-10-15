import { requiredElement } from "./dom.js";
import { initialState, beginTransition, settleTransition } from "./state.js";
import { createProjectStage } from "./stage.js";
import { installSwipe } from "./swipe.js";
export function mountProjectShowcase(root, projects) {
    if (projects.length !== 3)
        throw new Error("ProjectShowcase needs three records.");
    const abort = new AbortController();
    const controls = requiredElement(root, "[data-controls]");
    const buttons = [...controls.querySelectorAll("button")];
    const info = requiredElement(root, "[data-info]");
    const name = requiredElement(info, "[data-name]");
    const category = requiredElement(info, "[data-category]");
    const technology = requiredElement(info, "[data-technology]");
    const description = requiredElement(info, "[data-description]");
    const index = requiredElement(info, "[data-index]");
    const link = requiredElement(info, "[data-detail]");
    const announcement = requiredElement(root, "[data-announcement]");
    let state = initialState();
    let token = 0;
    let disposed = false;
    // Geometry notifications start only after stage installation is complete.
    let settleEnvironment = () => { };
    const stage = createProjectStage(root, () => settleEnvironment());
    function reflectPhase() {
        root.dataset.phase = state.phase;
        root.dataset.activeIndex = String(state.activeIndex);
        root.dataset.toIndex = String(state.toIndex);
        root.dataset.step = String(state.step);
        info.setAttribute("aria-busy", String(state.phase === "transition"));
        buttons.forEach(button => button.setAttribute("aria-disabled", String(state.phase === "transition")));
    }
    function renderInfo(announce) {
        const project = projects[state.activeIndex];
        name.textContent = project.name;
        category.textContent = project.category;
        technology.textContent = project.technologyLabel;
        description.textContent = project.description;
        index.textContent = `${String(state.activeIndex + 1).padStart(2, "0")} / 03`;
        link.href = project.detailHref;
        link.setAttribute("aria-label", `${project.name} projesini incele`);
        stage.element.setAttribute("aria-label", `${project.name} için görsel konsept: ${project.visual.label}`);
        if (announce)
            announcement.textContent = `${index.textContent}: ${project.name}. ${project.category}.`;
    }
    function finishTransition() {
        if (state.phase !== "transition")
            return;
        token++;
        state = settleTransition(state);
        stage.commit(state.activeIndex, state.step);
        renderInfo(true);
        reflectPhase();
    }
    settleEnvironment = finishTransition;
    function navigate(direction) {
        if (disposed)
            return;
        const next = beginTransition(state, direction, projects.length);
        if (!next)
            return;
        state = next;
        reflectPhase();
        const run = ++token;
        stage.play(state).then(() => {
            if (!disposed && run === token)
                finishTransition();
        }).catch(() => {
            if (!disposed && run === token)
                finishTransition();
        });
    }
    buttons.forEach(button => button.addEventListener("click", () => navigate(button.dataset.direction === "-1" ? -1 : 1), { signal: abort.signal }));
    root.addEventListener("keydown", event => {
        if (event.repeat || event.ctrlKey || event.altKey || event.metaKey || event.shiftKey)
            return;
        if (event.target instanceof HTMLElement && event.target.closest("input,textarea,select,[contenteditable=true]"))
            return;
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight")
            return;
        event.preventDefault();
        navigate(event.key === "ArrowRight" ? 1 : -1);
    }, { signal: abort.signal });
    document.addEventListener("visibilitychange", () => { if (document.hidden)
        finishTransition(); }, { signal: abort.signal });
    installSwipe(stage.element, navigate, abort.signal);
    root.querySelectorAll("[data-site-locale=tr]").forEach(anchor => anchor.addEventListener("click", () => {
        try {
            localStorage.setItem("bayessoft-locale", "tr");
        }
        catch { /* Navigation remains available without storage. */ }
    }, { signal: abort.signal }));
    stage.commit(0, 0);
    renderInfo(false);
    reflectPhase();
    controls.hidden = false;
    stage.element.tabIndex = 0;
    root.dataset.ready = "true";
    return {
        navigate, getState: () => state,
        destroy() {
            finishTransition();
            disposed = true;
            token++;
            abort.abort();
            stage.destroy();
            controls.hidden = true;
            stage.element.tabIndex = -1;
        },
    };
}
