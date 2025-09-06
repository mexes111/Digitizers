import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Typography } from '../typography/Typography';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  width?: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
  width = Dimensions.get('screen').width * 0.75,
}) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    progressBar: {
      width,
      height: 4,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 2,
      marginRight: 12,
    },
    progressFill: {
      width: `${progressPercentage}%`,
      height: '100%',
      backgroundColor: '#007AFF',
      borderRadius: 2,
    },
    progressText: {
      fontSize: 16,
      color: '#007AFF',
      fontWeight: '600',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>
      <Typography style={styles.progressText}>
        {currentStep}/{totalSteps}
      </Typography>
    </View>
  );
};