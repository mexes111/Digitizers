import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';

interface CameraButtonProps {
  onPress: () => void;
  size?: number;
}

export const CameraButton: React.FC<CameraButtonProps> = ({ 
  onPress, 
  size = 80 
}) => {
  const {theme} = useTheme()
  const styles = StyleSheet.create({
    cameraButton: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 6,
    },
    cameraButtonInner: {
      width: size * 0.75,
      height: size * 0.75,
      borderRadius: (size * 0.75) / 2,
      borderWidth: 2,
      borderColor: theme.colors.background,
    },
  });

  return (
    <TouchableOpacity style={styles.cameraButton} onPress={onPress}>
      <View style={styles.cameraButtonInner} />
    </TouchableOpacity>
  );
};