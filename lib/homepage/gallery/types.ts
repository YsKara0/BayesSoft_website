export type Direction = -1 | 1;
export type ShowcaseState = Readonly<{
  phase: "idle" | "transition";
  activeIndex: number;
  fromIndex: number;
  toIndex: number;
  direction: Direction;
  step: number;
  targetStep: number;
}>;

export type ShowcaseController = Readonly<{
  navigate: (direction: Direction) => void;
  getState: () => ShowcaseState;
  destroy: () => void;
}>;
