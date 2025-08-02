import { create } from 'zustand';
import { ColorScheme } from '../theme/colors';

interface ThemeState {
  colorScheme: ColorScheme;
  toggleTheme: () => void;
  setTheme: (scheme: ColorScheme) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  colorScheme: 'dark', // Default to dark mode
  toggleTheme: () =>
    set((state) => ({
      colorScheme: state.colorScheme === 'light' ? 'dark' : 'light',
    })),
  setTheme: (scheme: ColorScheme) =>
    set(() => ({
      colorScheme: scheme,
    })),
}));