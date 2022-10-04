export interface PanState {
  isSpaceDown: boolean;
  isMouseDown: boolean;
  moveBy: MoveBy;
  setIsSpaceDown: (callback: (isSpaceDown: boolean) => boolean) => void;
  setIsMouseDown: (callback: (mouseDown: boolean) => boolean) => void;
  setMoveBy: (callback: (moveBy: MoveBy) => MoveBy) => void;
}

export type MoveBy = {
  X: number;
  Y: number;
};
