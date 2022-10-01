import create from "zustand";
import { CardState, GradientState, ArrowState, PanStore } from "./types";

export const useCardStore = create<CardState>((set) => ({
  height: 332,
  width: 672,
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
}
));

export const useArrowStore = create<ArrowState>((set) => ({
  showArrow: false,
  x: 0,
  y: 0,
  changeVisibility: (showArrow) => {
    set(() => ({ showArrow }));
  },
  changeX: (x) => {
    set((state) => {
      if (state.x > window.innerWidth) {
        return { x: -20 };
      } else if (state.x < -20) {
        return { x: window.innerWidth };
      }
      return { x: state.x + x };
    });
  },
  changeY: (y) => {
    set((state) => ({ y: state.y + y }));
  },
  setX: (x) => {
    set(() => ({ x }));
  },
  setY: (y) => {
    set(() => ({ y }));
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

export const usePanStore = create<PanStore>((set) => ({
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
