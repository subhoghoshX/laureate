import create from "zustand";
import { CardState } from "./types";

export const useCardStore = create<CardState>((set) => ({
  height: 332,
  width: 672,
  rounded: 16,
  changeHeight: (height) => {
    set(() => ({ height }));
  },
  incrementCardWidth: (width) => {
    set((state) => ({
      width: state.width + width,
    }));
  },
  changeWidth: (width) => {
    set(() => ({ width: width }));
  },
  incrementCardHeight: (height) => {
    set((state) => ({
      height: state.height + height,
    }));
  },
  incrementRounded: (radius, final) => {
    set((state) => ({
      rounded: final ? radius : state.rounded + radius,
    }));
  },
}));
