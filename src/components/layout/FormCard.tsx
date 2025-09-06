import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';

interface FormCardProps {
  children: React.ReactNode;
  padding?: number;
}

export const FormCard: React.FC<FormCardProps> = ({
  children,
  padding,
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.xl,
      padding: padding || 24,
      ...theme.shadows.md,
    },
  });

  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};