export interface GradientState {
  gradients: Gradient[];
  selectGradient: (id: number) => void;
  // selectedGradient: Gradient;
}

export type Gradient = {
  id: number;
  from: string;
  to: string;
  selected: boolean;
};
