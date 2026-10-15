import type { Direction, ShowcaseState } from "./types";

export function initialState(): ShowcaseState {
  return { phase: "idle", activeIndex: 0, fromIndex: 0, toIndex: 0, direction: 1, step: 0, targetStep: 0 };
}

export function beginTransition(state: ShowcaseState, direction: Direction, count: number): ShowcaseState | null {
  if (state.phase !== "idle") return null;
  return {
    ...state,
    phase: "transition",
    fromIndex: state.activeIndex,
    toIndex: (state.activeIndex + direction + count) % count,
    direction,
    targetStep: state.step + direction,
  };
}

export function settleTransition(state: ShowcaseState): ShowcaseState {
  return { ...state, phase: "idle", activeIndex: state.toIndex, fromIndex: state.toIndex, step: state.targetStep };
}
