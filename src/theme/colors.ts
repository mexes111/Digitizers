export const colors = {
  light: {
    primary: '#007AFF',
    primaryDark: '#0056CC',
    semiVeryDarkPrimary: '#1955a4',
    veryDarkPrimary: "#0b2b54",
    secondary: '#34C759',
    background: '#FFFFFF',
    surface: '#F2F2F7',
    surfaceSecondary: '#E5E5EA',
    textPrimary: '#000000',
    textSecondary: '#8A95A6',
    textTertiary: '#C7C7CC',
    border: '#C6C6C8',
    error: '#FF3B30',
    warning: '#FF9500',
    success: '#34C759',
    overlay: 'rgba(0, 0, 0, 0.4)',
  },
  dark: {
    primary: '#0A84FF',
    primaryDark: '#0056CC',
    secondary: '#30D158',
    background: '#000000',
    surface: '#1C1C1E',
    surfaceSecondary: '#2C2C2E',
    textPrimary: '#FFFFFF',
    textSecondary: '#8E8E93',
    textTertiary: '#48484A',
    border: '#38383A',
    error: '#FF453A',
    warning: '#FF9F0A',
    success: '#30D158',
    overlay: 'rgba(0, 0, 0, 0.6)',
  },
};

export type ColorScheme = 'light' | 'dark';
export type Colors = typeof colors.light;