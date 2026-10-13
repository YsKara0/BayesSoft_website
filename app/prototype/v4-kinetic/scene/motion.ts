export const TRANSITION_SECONDS = 3.6;
export const REST_SECONDS = 4.4;

function smooth(value: number) {
  const t = Math.max(0, Math.min(1, value));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function interval(progress: number, start: number, end: number) {
  return smooth((progress - start) / (end - start));
}

// One reversible mechanism coordinate: 0 = wide, 1 = compact.
// Components follow constrained axes; reversing a request preserves the pose.
export function mechanismPose(progress: number) {
  const p = Math.max(0, Math.min(1, progress));
  const vertical = interval(p, 0.26, 0.49);
  const horizontal = interval(p, 0.50, 0.74);
  return {
    leftAngle: -Math.PI * interval(p, 0.10, 0.69),
    rightAngle: Math.PI * interval(p, 0.18, 0.76),
    railExtension: 1 - interval(p, 0.76, 0.92),
    latchLift: 0.07 * Math.min(interval(p, 0, 0.08), 1 - interval(p, 0.93, 1)),
    leftCard: [-0.335 * (1 - horizontal), 0.10 + 0.46 * vertical] as const,
    rightCard: [0.335 * (1 - horizontal), 0.10 - 0.46 * vertical] as const,
  };
}
