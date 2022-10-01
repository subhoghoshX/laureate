import create from "zustand";

export const useCardStore = create((set) => {
  return {
    height: 332,
    width: 672,
    rounded: 16,
    changeHeight: (c: any) => {
      set((state: any) => ({ height: c }));
    },
    incrementCardWidth: (c: any) => {
      set((state: any) => ({
        width: state.width + c,
      }));
    },
    changeWidth: (c: any) => {
      set((state: any) => ({ width: c }));
    },
    incrementCardHeight: (c: any) => {
      set((state: any) => ({
        height: state.height + c,
      }));
    },
    incrementRounded: (c: any, final: boolean) => {
      set((state: any) => ({
        rounded: final ? c : state.rounded + c,
      }));
    },
  };
});

export const useArrowStore = create((set) => {
  return {
    showArrow: false,
    X: 0,
    Y: 0,
    changeVisibility: (c: any) => {
      set((state: any) => ({ showArrow: c }));
    },
    changeX: (c: any) => {
      set((state: any) => {
        if (state.X > window.innerWidth) {
          return { X: -20 };
        } else if (state.X < -20) {
          return { X: window.innerWidth };
        }
        return { X: state.X + c };
      });
    },
    changeY: (c: any) => {
      set((state: any) => ({ Y: state.Y + c }));
    },
    setX: (c: any) => {
      set((state: any) => ({ X: c }));
    },
    setY: (c: any) => {
      set((state: any) => ({ Y: c }));
    },
  };
});

export const useGradientStore = create((set) => {
  return {
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
    selectGradient: (id: any) => {
      set((state: any) => {
        return {
          gradients: state.gradients.map((gradient: any) =>
            gradient.id == id
              ? { ...gradient, selected: true }
              : { ...gradient, selected: false },
          ),
        };
      });
    },
  };
});

export const usePanStore = create((set) => {
  return {
    spaceDown: false,
    mouseDown: false,
    moveBy: { X: 0, Y: 0 },
    changeSpaceDown: (c: any) => {
      set((state: any) => ({ spaceDown: c }));
    },
    setMouseDown: (c: any) => {
      set((staet: any) => ({ mouseDown: c }));
    },
    setMoveBy: (c: any) => {
      set((state: any) => ({ moveBy: c }));
    },
  };
});
