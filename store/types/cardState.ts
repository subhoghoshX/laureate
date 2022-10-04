export interface CardState {
  height: number;
  width: number;
  radius: number;
  setHeight: (callback: (height: number) => number) => void;
  setWidth: (callback: (width: number) => number) => void;
  setRadius: (callback: (radius: number) => number) => void;
}
