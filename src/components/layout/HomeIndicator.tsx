import React from 'react';
import { View, StyleSheet } from 'react-native';

interface HomeIndicatorProps {
  width?: number;
  height?: number;
  color?: string;
}

export const HomeIndicator: React.FC<HomeIndicatorProps> = ({ 
  width = 134, 
  height = 5,
  color = '#FFFFFF'
}) => {
  const styles = StyleSheet.create({
    homeIndicator: {
      width,
      height,
      backgroundColor: color,
      borderRadius: height / 2,
    },
  });

  return <View style={styles.homeIndicator} />;
};