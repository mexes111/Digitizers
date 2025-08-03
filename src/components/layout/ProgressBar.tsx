import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography } from '../typography/Typography';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  style?: ViewStyle;
  showText?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  style,
  showText = true,
}) => {
  const { theme } = useTheme();
  const progress = (currentStep / totalSteps) * 100;

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row'
    },
    progressContainer: {
      width: '100%',
      height: 4,
      backgroundColor: `${theme.colors.textPrimary}20`,
      borderRadius: 2,
      overflow: 'hidden',
    },
    progressBar: {
      height: '100%',
      backgroundColor: theme.colors.primary,
      borderRadius: 2,
    },
    progressText: {
      fontSize: theme.fontSize.sm,
      color: theme.colors.textSecondary,
      marginTop: theme.spacing.xs,
    },
  });

  return (
    <View style={[styles.container, style]}>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
      {showText && (
        <Typography style={styles.progressText}>
          {currentStep}/{totalSteps}
        </Typography>
      )}
    </View>
  );
};