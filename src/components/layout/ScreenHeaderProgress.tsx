import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Typography } from '../typography/Typography';
import { ProgressIndicator } from './ProgressIndicator';

interface ScreenHeaderProgressProps {
  title: string;
  subtitle?: string;
  onBackPress: () => void;
  showBackButton?: boolean;
  currentStep: number;
  totalSteps: number;
}

export const ScreenHeaderProgress: React.FC<ScreenHeaderProgressProps> = ({
  title,
  subtitle,
  onBackPress,
  showBackButton = true,
  currentStep,
  totalSteps
}) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 10,
    },
    backButton: {
      width: 34,
      height: 34,
      borderRadius: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
      // marginTop: 40
    },
    backButtonText: {
     height: 15,
     width: 15
    },
    headerContainer: {
      marginBottom: subtitle ? 0 : 20,
    },
    headerText: {
      fontSize: 22,
      fontWeight: '700',
      color: '#FFFFFF',
      // marginBottom: 12,
      // lineHeight: 40,
    },
    subHeaderText: {
      fontSize: 14,
      color: '#A8A8A8',
      lineHeight: 24,
    },
  });

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Image resizeMode='contain' style={styles.backButtonText} source={require('../../assets/Icon.png')} />
        </TouchableOpacity>
      )}
      <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
      <View style={styles.headerContainer}>
        <Typography style={styles.headerText}>
          {title}
        </Typography>
        {subtitle && (
          <Typography style={styles.subHeaderText}>
            {subtitle}
          </Typography>
        )}
      </View>
    </View>
  );
};