import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Typography } from '../typography/Typography';

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
  onBackPress: () => void;
  showBackButton?: boolean;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  subtitle,
  onBackPress,
  showBackButton = true,
}) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 80,
    },
    backButton: {
      width: 44,
      height: 44,
      borderRadius: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 60,
    },
    backButtonText: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: '600',
    },
    headerContainer: {
      marginBottom: subtitle ? 0 : 20,
    },
    headerText: {
      fontSize: 24,
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: 12,
      lineHeight: 40,
    },
    subHeaderText: {
      fontSize: 16,
      color: '#A8A8A8',
      lineHeight: 24,
    },
  });

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Typography style={styles.backButtonText}>‹</Typography>
        </TouchableOpacity>
      )}
      
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