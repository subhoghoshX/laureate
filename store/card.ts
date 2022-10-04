import create from "zustand";
import { CardState } from "./types";

export const useCardStore = create<CardState>((set) => ({
  height: 332,
  width: 672,
  radius: 16,
  opacity: 70,
  setHeight(callback) {
    set((state) => ({ height: callback(state.height) }));
  },
  setWidth(callback) {
    set((state) => ({ width: callback(state.width) }));
  },
  setRadius(callback) {
    set((state) => ({ radius: callback(state.radius) }));
  },
  setOpacity(callback) {
    set((state) => ({ opacity: callback(state.opacity) }));
  },
}));
