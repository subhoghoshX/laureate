import create from "zustand";

export const useCardStore = create((set) => {
  return {
    height: 332,
    width: 672,
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
