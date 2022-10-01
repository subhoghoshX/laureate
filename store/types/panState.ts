export interface PanState {
  spaceDown: boolean;
  mouseDown: boolean;
  moveBy: MoveBy;
  setSpaceDown: (spaceDown: boolean) => void;
  setMouseDown: (mouseDown: boolean) => void;
  setMoveBy: (moveBy: MoveBy) => void;
}

export type MoveBy = {
  x: number;
  y: number;
}