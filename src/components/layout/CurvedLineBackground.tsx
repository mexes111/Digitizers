import React from 'react';
import { View, StyleSheet } from 'react-native';

interface CurvedLineBackgroundProps {
  variant?: 'default' | 'large' | 'small';
  position?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';
}

export const CurvedLineBackground: React.FC<CurvedLineBackgroundProps> = ({
  variant = 'default',
  position = 'topRight',
}) => {
  const getDimensions = () => {
    switch (variant) {
      case 'large':
        return { width: 300, height: 300 };
      case 'small':
        return { width: 180, height: 180 };
      default:
        return { width: 220, height: 180 };
    }
  };

  const getPosition = () => {
    const { width, height } = getDimensions();
    switch (position) {
      case 'topLeft':
        return { top: -50, left: -120 };
      case 'bottomRight':
        return { bottom: -50, right: -120 };
      case 'bottomLeft':
        return { bottom: -50, left: -120 };
      default: // topRight
        return { top: -50, right: -120 };
    }
  };

  const styles = StyleSheet.create({
    curvedLine: {
      position: 'absolute',
      ...getPosition(),
      ...getDimensions(),
      borderRadius: 150,
      borderWidth: 2,
      borderColor: 'rgba(0, 200, 255, 0.2)',
      borderStyle: 'solid',
    },
  });

  return <View style={styles.curvedLine} />;
};