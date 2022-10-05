export interface CardState {
  height: number;
  width: number;
  radius: number;
  opacity: number;
  font: Set<string>;
  setHeight: (callback: (height: number) => number) => void;
  setWidth: (callback: (width: number) => number) => void;
  setRadius: (callback: (radius: number) => number) => void;
  setOpacity: (callback: (radius: number) => number) => void;
  setFont: (callback: (radius: Set<string>) => Set<string>) => void;
}
