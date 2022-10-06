import create from "zustand";
import { CardState } from "./types";

export const useCardStore = create<CardState>((set) => ({
  height: 332,
  width: 672,
  radius: 16,
  opacity: 70,
  font: new Set(["system-ui", "sans-serif"]),
  setHeight(callback) {
    set(({ height }) => ({ height: callback(height) }));
  },
  setWidth(callback) {
    set(({ width }) => ({ width: callback(width) }));
  },
  setRadius(callback) {
    set(({ radius }) => ({ radius: callback(radius) }));
  },
  setOpacity(callback) {
    set(({ opacity }) => ({ opacity: callback(opacity) }));
  },
  setFont(callback) {
    set(({ font }) => ({ font: callback(font) }));
  },
}));
