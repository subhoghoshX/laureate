import create from "zustand";
import { PanState } from "./types";

export const usePanStore = create<PanState>((set) => ({
  isSpaceDown: false,
  isMouseDown: false,
  moveBy: { X: 0, Y: 0 },
  setIsSpaceDown(callback) {
    set((state) => ({ isSpaceDown: callback(state.isSpaceDown) }));
  },
  setIsMouseDown(callback) {
    set((state) => ({ isMouseDown: callback(state.isMouseDown) }));
  },
  setMoveBy(callback) {
    set((state) => ({ moveBy: callback(state.moveBy) }));
  },
}));
