import create from "zustand";
import { GradientState } from "./types";

export const useGradientStore = create<GradientState>((set) => ({
  selectedGradient: { id: 1, from: "#EECDA3", to: "#EF629F" },
  gradients: [
    {
      id: 1,
      from: "#EECDA3",
      to: "#EF629F",
    },
    {
      id: 2,
      from: "#FC5C7D",
      to: "#6A82FB",
    },
    {
      id: 3,
      from: "#FFFBD5",
      to: "#B20A2C",
    },
    {
      id: 4,
      from: "#159957",
      to: "#155799",
    },
    {
      id: 5,
      from: "#F79D00",
      to: "#64F38C",
    },
    {
      id: 6,
      from: "#00E1F4",
      to: "#0064F4",
    },
    {
      id: 7,
      from: "#536976",
      to: "#292E49",
    },
    {
      id: 8,
      from: "#F12711",
      to: "#F5AF19",
    },
  ],
  setSelectedGradient(callback) {
    set(({ selectedGradient }) => ({
      selectedGradient: callback(selectedGradient),
    }));
  },
  setGradients(callback) {
    set(({ gradients }) => ({ gradients: callback(gradients) }));
  },
}));
