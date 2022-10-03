import create from "zustand";
import { GradientState } from "./types";

export const useGradientStore = create<GradientState>((set) => ({
  gradients: [
    {
      id: 1,
      from: "#F12711",
      to: "#F5AF19",
      selected: true,
    },
    {
      id: 2,
      from: "#FC5C7D",
      to: "#6A82FB",
      selected: false,
    },
    {
      id: 3,
      from: "#FFFBD5",
      to: "#B20A2C",
      selected: false,
    },
    {
      id: 4,
      from: "#159957",
      to: "#155799",
      selected: false,
    },
    {
      id: 5,
      from: "#F79D00",
      to: "#64F38C",
      selected: false,
    },
    {
      id: 6,
      from: "#00E1F4",
      to: "#0064F4",
      selected: false,
    },
    {
      id: 7,
      from: "#536976",
      to: "#292E49",
      selected: false,
    },
    {
      id: 8,
      from: "#EECDA3",
      to: "#EF629F",
      selected: false,
    },
  ],

  selectGradient: (id) => {
    set((state) => {
      return {
        gradients: state.gradients.map((gradient) =>
          gradient.id == id
            ? { ...gradient, selected: true }
            : { ...gradient, selected: false },
        ),
      };
    });
  },
}));
