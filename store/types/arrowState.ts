export interface ArrowState {
  showArrow: boolean;
  X: number;
  Y: number;
  changeVisibility: (showArrow: boolean) => void;
  changeX: (X: number) => void;
  changeY: (Y: number) => void;
  setX: (X: number) => void;
  setY: (Y: number) => void;
}