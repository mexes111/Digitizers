import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';

interface DividerProps {
  /** Orientation of the divider */
  orientation?: 'horizontal' | 'vertical';
  /** Thickness of the divider line */
  thickness?: number;
  /** Color of the divider. If not provided, uses theme border color */
  color?: string;
  /** Margin around the divider */
  margin?: number;
  /** Margin for horizontal orientation (top and bottom) */
  marginVertical?: number;
  /** Margin for vertical orientation (left and right) */
  marginHorizontal?: number;
  /** Custom style for the divider */
  style?: ViewStyle;
  /** Length of the divider (width for horizontal, height for vertical) */
  length?: number | string;
  /** Opacity of the divider */
  opacity?: number;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  thickness = 1,
  color,
  margin,
  marginVertical,
  marginHorizontal,
  style,
  length,
  opacity = 1,
}) => {
  const { theme } = useTheme();

  const isHorizontal = orientation === 'horizontal';
  
  const dividerColor = color || theme.colors.border;

  const styles = StyleSheet.create({
    divider: {
      backgroundColor: dividerColor,
      opacity,
      ...(isHorizontal
        ? {
            height: thickness,
            width: length || '100%',
            marginVertical: marginVertical ?? margin ?? theme.spacing.sm,
            marginHorizontal: marginHorizontal ?? 0,
          }
        : {
            width: thickness,
            height: length || '100%',
            marginHorizontal: marginHorizontal ?? margin ?? theme.spacing.sm,
            marginVertical: marginVertical ?? 0,
          }),
    },
  });

  return <View style={[styles.divider, style]} />;
};