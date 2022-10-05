export interface ArrowState {
  isArrowVisible: boolean;
  X: number;
  Y: number;
  setIsArrowVisible: (callback: (isArrowVisible: boolean) => boolean) => void;
  setX: (callback: (X: number) => number) => void;
  setY: (callback: (Y: number) => number) => void;
}
