// Nine positions share one cylinder; three real projects repeat three times.
export const CYLINDER = Object.freeze({ slots: 9, step: 40, arc: 38, strips: 13, coverRatio: 1.25, overlap: 1.05 });
export function cylinderGeometry(width, compact) {
    const radius = width * (compact ? 1.04 : .58);
    const radians = CYLINDER.arc * Math.PI / 180;
    return {
        radius,
        perspective: width * (compact ? 3.8 : 3.6),
        stripWidth: 2 * radius * Math.tan(radians / CYLINDER.strips / 2) * CYLINDER.overlap,
        coverHeight: radius * radians * CYLINDER.coverRatio,
    };
}
export function slotForStep(step) {
    return ((step % CYLINDER.slots) + CYLINDER.slots) % CYLINDER.slots;
}
