export const LOOP_SECONDS = 10.8;
export const ASSEMBLED_TIME = 4.4;

export function smootherstep(value: number) {
  const t = Math.max(0, Math.min(1, value));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

// Both endpoints have zero velocity and acceleration. The final separated
// hold exactly matches the next loop's initial pose: no reset transition.
export function separationAt(time: number, arrival: number, departure: number) {
  const t = ((time % LOOP_SECONDS) + LOOP_SECONDS) % LOOP_SECONDS;
  const joinStart = 0.8 + arrival * 0.16;
  const leaveStart = 7.0 + departure * 0.14;
  if (t < joinStart) return 1;
  if (t < joinStart + 1.65) return 1 - smootherstep((t - joinStart) / 1.65);
  if (t < leaveStart) return 0;
  return smootherstep((t - leaveStart) / 1.85);
}

export function phaseAt(time: number) {
  const t = time % LOOP_SECONDS;
  if (t < 0.8 || t >= 9.27) return "separated";
  if (t < 2.93) return "assembling";
  if (t < 7) return "assembled";
  return "disassembling";
}
