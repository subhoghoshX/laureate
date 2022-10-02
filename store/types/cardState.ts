export interface CardState {
  height: number;
  width: number;
  rounded: number;
  changeHeight: (height: number) => void;
  incrementCardWidth: (height: number) => void;
  changeWidth: (width: number) => void;
  incrementCardHeight: (height: number) => void;
  incrementRounded: (radius: number, final: boolean) => void;
}