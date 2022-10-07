import create from "zustand";
import { DarkState } from "./types";

export const useDarkStore = create<DarkState>((set) => ({
  isDark: false,
  setIsDark(callback) {
    set(({ isDark }) => ({ isDark: callback(isDark) }));
  },
}));
