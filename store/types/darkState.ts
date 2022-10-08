export interface DarkState {
  isDark: boolean;
  setIsDark: (callback: (isDark: boolean) => boolean) => void;
}
