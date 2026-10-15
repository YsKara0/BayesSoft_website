export function installSwipe(element, navigate, signal) {
    let start = null;
    element.addEventListener("pointerdown", event => {
        if (!event.isPrimary || event.pointerType !== "touch")
            return;
        start = { id: event.pointerId, x: event.clientX, y: event.clientY };
        element.setPointerCapture(event.pointerId);
    }, { signal });
    element.addEventListener("pointercancel", () => { start = null; }, { signal });
    element.addEventListener("pointerup", event => {
        if (!start || event.pointerId !== start.id)
            return;
        const dx = event.clientX - start.x;
        const dy = event.clientY - start.y;
        start = null;
        if (element.hasPointerCapture(event.pointerId))
            element.releasePointerCapture(event.pointerId);
        if (Math.abs(dx) >= 48 && Math.abs(dx) > Math.abs(dy) * 1.5)
            navigate(dx < 0 ? 1 : -1);
    }, { signal });
}
