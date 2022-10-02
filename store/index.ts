import create from "zustand";
import { CardState, GradientState, ArrowState, PanState } from "./types";

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
    set((state: any) => ({
      rounded: final ? radius : state.rounded + radius,
    }));
  },
}
));

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
}
));

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
})
);

export const usePanStore = create<PanState>((set) => ({
  spaceDown: false,
  mouseDown: false,
  moveBy: { x: 0, y: 0 },
  setSpaceDown: (spaceDown) => {
    set(() => ({ spaceDown }));
  },
  setMouseDown: (mouseDown) => {
    set(() => ({ mouseDown }));
  },
  setMoveBy: (moveBy) => {
    set(() => ({ moveBy }));
  },
}
));
