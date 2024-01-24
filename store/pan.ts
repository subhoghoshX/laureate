import create from "zustand";
import { PanState } from "./types";

export const usePanStore = create<PanState>((set) => ({
  isSpaceDown: false,
  isMouseDown: false,
  moveBy: { X: 0, Y: 0 },
  setIsSpaceDown(callback) {
    set(({ isSpaceDown }) => ({ isSpaceDown: callback(isSpaceDown) }));
  },
  setIsMouseDown(callback) {
    set(({ isMouseDown }) => ({ isMouseDown: callback(isMouseDown) }));
  },
  setMoveBy(callback) {
    set(({ moveBy }) => ({ moveBy: callback(moveBy) }));
  },
}));
