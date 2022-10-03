import create from "zustand";
import { ArrowState } from "./types";

export const useArrowStore = create<ArrowState>((set) => ({
  isArrowVisible: false,
  X: 0,
  Y: 0,
  setIsArrowVisible(callback) {
    set((state) => ({ isArrowVisible: callback(state.isArrowVisible) }));
  },
  setX(callback) {
    set((state) => {
      if (state.X > window.innerWidth) {
        return { X: -20 };
      } else if (state.X < -20) {
        return { X: window.innerWidth };
      } else {
        return { X: callback(state.X) };
      }
    });
  },
  setY(callback) {
    set((state) => ({ Y: callback(state.Y) }));
  },
}));
