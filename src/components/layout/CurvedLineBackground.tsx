import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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

  const { width, height } = getDimensions();
  const positionStyle = getPosition();

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      ...positionStyle,
      width,
      height,
      
    },
    curvedLine: {
      width: '100%',
      height: '100%',
      borderRadius: 150,
      borderWidth: 2,
      borderColor: 'rgba(0, 200, 255, 0.2)',
      borderStyle: 'solid',
      overflow: 'hidden',
    },
    gradientBottom: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '50%', // Bottom half of the curve
      borderBottomLeftRadius: 150,
      borderBottomRightRadius: 150,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.curvedLine}>
        <LinearGradient
          colors={[
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0)',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientBottom}
        />
      </View>
    </View>
  );
};