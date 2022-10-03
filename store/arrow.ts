import create from "zustand";
import { ArrowState } from "./types";

export const useArrowStore = create<ArrowState>((set) => ({
  showArrow: false,
  X: 0,
  Y: 0,
  changeVisibility: (showArrow) => {
    set(() => ({ showArrow }));
  },
  changeX: (X) => {
    set((state) => {
      if (state.X > window.innerWidth) {
        return { X: -20 };
      } else if (state.X < -20) {
        return { X: window.innerWidth };
      }
      return { X: state.X + X };
    });
  },
  changeY: (Y) => {
    set((state) => ({ Y: state.Y + Y }));
  },
  setX: (X) => {
    set(() => ({ X }));
  },
  setY: (Y) => {
    set(() => ({ Y }));
  },
}));
