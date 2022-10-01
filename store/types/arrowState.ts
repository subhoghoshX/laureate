export interface ArrowState {
  showArrow: boolean;
  x: number;
  y: number;
  changeVisibility: (showArrow: boolean) => void;
  changeX: (x: number) => void;
  changeY: (y: number) => void;
  setX: (x: number) => void;
  setY: (y: number) => void;
}