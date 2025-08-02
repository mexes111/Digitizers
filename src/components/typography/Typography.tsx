import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';

interface TypographyProps {
  variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'button';
  color?: string;
  align?: 'left' | 'center' | 'right';
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  style?: TextStyle;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color,
  align = 'left',
  weight = 'regular',
  style,
  children,
}) => {
  const { theme } = useTheme();
  
  const getVariantStyle = (): TextStyle => {
    switch (variant) {
      case 'heading':
        return {
          fontSize: theme.fontSize.xxxl,
          lineHeight: theme.fontSize.xxxl * 1.2,
        };
      case 'subheading':
        return {
          fontSize: theme.fontSize.lg,
          lineHeight: theme.fontSize.lg * 1.3,
        };
      case 'body':
        return {
          fontSize: theme.fontSize.md,
          lineHeight: theme.fontSize.md * 1.4,
        };
      case 'caption':
        return {
          fontSize: theme.fontSize.sm,
          lineHeight: theme.fontSize.sm * 1.3,
        };
      case 'button':
        return {
          fontSize: theme.fontSize.md,
          lineHeight: theme.fontSize.md * 1.2,
        };
      default:
        return {
          fontSize: theme.fontSize.md,
          lineHeight: theme.fontSize.md * 1.4,
        };
    }
  };

  const textStyle: TextStyle = {
    ...getVariantStyle(),
    fontWeight: theme.fontWeight[weight],
    color: color || theme.colors.textPrimary,
    textAlign: align,
  };

  return (
    <Text style={[textStyle, style]}>
      {children}
    </Text>
  );
};