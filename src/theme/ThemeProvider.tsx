import React, { createContext, useContext, ReactNode } from 'react';
import { colors, ColorScheme, Colors } from './colors';
import { spacing, borderRadius, fontSize, fontWeight, shadows } from './spacing';
import { useThemeStore } from '../stores/themeStore';

export interface Theme {
  colors: Colors;
  spacing: typeof spacing;
  borderRadius: typeof borderRadius;
  fontSize: typeof fontSize;
  fontWeight: typeof fontWeight;
  shadows: typeof shadows;
  isDark: boolean;
}

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (scheme: ColorScheme) => void;
} | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { colorScheme, toggleTheme, setTheme } = useThemeStore();

  const theme: Theme = {
    colors: colors[colorScheme as keyof typeof colors],
    spacing,
    borderRadius,
    fontSize,
    fontWeight,
    shadows,
    isDark: colorScheme === 'dark',
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};