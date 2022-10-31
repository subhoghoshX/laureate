import create from "zustand";
import {
  MAX_ALLOWED_OPACITY,
  MIN_ALLOWED_HEIGHT,
  MIN_ALLOWED_OPACITY,
  MIN_ALLOWED_RADIUS,
  MIN_ALLOWED_WIDTH,
} from "./constants";
import { CardState } from "./types";
import { getValueInRange } from "./utils";

export const useCardStore = create<CardState>((set) => ({
  height: 332,
  width: 672,
  radius: 16,
  opacity: 70,
  font: new Set(["system-ui", "sans-serif"]),
  setHeight(callback) {
    set(({ height }) => ({
      height: getValueInRange(callback(height), MIN_ALLOWED_HEIGHT),
    }));
  },
  setWidth(callback) {
    set(({ width }) => ({
      width: getValueInRange(callback(width), MIN_ALLOWED_WIDTH),
    }));
  },
  setRadius(callback) {
    set(({ radius }) => ({
      radius: getValueInRange(callback(radius), MIN_ALLOWED_RADIUS),
    }));
  },
  setOpacity(callback) {
    set(({ opacity }) => ({
      opacity: getValueInRange(
        callback(opacity),
        MIN_ALLOWED_OPACITY,
        MAX_ALLOWED_OPACITY,
      ),
    }));
  },
  setFont(callback) {
    set(({ font }) => ({ font: callback(font) }));
  },
}));
