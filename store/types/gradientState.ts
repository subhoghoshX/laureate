export interface GradientState {
  gradients: Gradient[];
  setGradients: (callback: (gradients: Gradient[]) => Gradient[]) => void;
  selectedGradient: Gradient;
  setSelectedGradient: (
    callback: (selectedGradient: Gradient) => Gradient,
  ) => void;
}

export type Gradient = {
  id: number;
  from: string;
  to: string;
};
