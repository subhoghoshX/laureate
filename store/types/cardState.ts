export interface CardState {
  height: number;
  width: number;
  changeHeight: (height: number) => void;
  incrementCardWidth: (height: number) => void;
  changeWidth: (width: number) => void;
  incrementCardHeight: (height: number) => void;
}