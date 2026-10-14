import { requiredElement } from "./dom.js";
export function createProjectStage(root, onEnvironmentChange) {
    const element = requiredElement(root, "[data-stage]");
    const frame = requiredElement(element, "[data-frame]");
    const rotor = requiredElement(element, "[data-rotor]");
    const faces = [...rotor.querySelectorAll("[data-face]")];
    const compact = matchMedia("(max-width: 699px)");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let radius = 0;
    let previousWidth = 0;
    let previousEnvironment = "";
    let animations = [];
    function cancelAnimations() {
        animations.forEach(animation => animation.cancel());
        animations = [];
    }
    function updateGeometry() {
        const width = frame.getBoundingClientRect().width;
        const environment = `${compact.matches}:${reduced.matches}`;
        if (Math.abs(width - previousWidth) < 0.01 && environment === previousEnvironment)
            return;
        onEnvironmentChange();
        previousWidth = width;
        previousEnvironment = environment;
        radius = width / (2 * Math.tan(Math.PI / faces.length));
        element.style.setProperty("--stage-radius", `${radius}px`);
        element.dataset.mode = compact.matches ? "flat" : "3d";
    }
    const observer = new ResizeObserver(updateGeometry);
    observer.observe(frame);
    compact.addEventListener("change", updateGeometry);
    reduced.addEventListener("change", updateGeometry);
    updateGeometry();
    function commit(index, step) {
        element.style.setProperty("--stage-angle", `${-step * 120}deg`);
        faces.forEach((face, faceIndex) => {
            face.classList.toggle("is-current", faceIndex === index);
            face.classList.remove("is-entering");
        });
        cancelAnimations();
    }
    function play(state) {
        if (reduced.matches || typeof rotor.animate !== "function")
            return Promise.resolve();
        const timing = { duration: compact.matches ? 440 : 900, easing: "cubic-bezier(.65,0,.2,1)", fill: "both" };
        if (compact.matches) {
            const incoming = faces[state.toIndex];
            incoming.classList.add("is-entering");
            animations = [
                faces[state.fromIndex].animate([
                    { transform: "translateX(0) scale(1)", opacity: 1 },
                    { transform: `translateX(${-state.direction * 34}px) scale(.97)`, opacity: 0 },
                ], timing),
                incoming.animate([
                    { transform: `translateX(${state.direction * 34}px) scale(.97)`, opacity: 0 },
                    { transform: "translateX(0) scale(1)", opacity: 1 },
                ], timing),
            ];
        }
        else {
            const transform = (step) => `translateZ(${-radius}px) rotateY(${-step * 120}deg)`;
            animations = [rotor.animate([{ transform: transform(state.step) }, { transform: transform(state.targetStep) }], timing)];
        }
        return Promise.all(animations.map(animation => animation.finished)).then(() => undefined);
    }
    return {
        element, commit, play,
        destroy() {
            cancelAnimations();
            observer.disconnect();
            compact.removeEventListener("change", updateGeometry);
            reduced.removeEventListener("change", updateGeometry);
        },
    };
}
