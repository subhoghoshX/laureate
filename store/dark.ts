import create from "zustand";
import { DarkState } from "./types";
import { persist } from "zustand/middleware";

export const useDarkStore = create<DarkState>()(
  persist(
    (set) => ({
      isDark: false,
      setIsDark(callback) {
        set(({ isDark }) => ({ isDark: callback(isDark) }));
      },
    }),
    {
      name: "laureate-dark-mode",
    },
  ),
);
