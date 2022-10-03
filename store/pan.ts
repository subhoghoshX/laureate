import create from "zustand";
import { PanState } from "./types";

export const usePanStore = create<PanState>((set) => ({
  spaceDown: false,
  mouseDown: false,
  moveBy: { X: 0, Y: 0 },
  setSpaceDown: (spaceDown) => {
    set(() => ({ spaceDown }));
  },
  setMouseDown: (mouseDown) => {
    set(() => ({ mouseDown }));
  },
  setMoveBy: (moveBy) => {
    set(() => ({ moveBy }));
  },
}));
