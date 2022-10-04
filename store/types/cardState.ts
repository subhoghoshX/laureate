export interface CardState {
  height: number;
  width: number;
  radius: number;
  opacity: number;
  setHeight: (callback: (height: number) => number) => void;
  setWidth: (callback: (width: number) => number) => void;
  setRadius: (callback: (radius: number) => number) => void;
  setOpacity: (callback: (radius: number) => number) => void;
}
