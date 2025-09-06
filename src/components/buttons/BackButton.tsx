import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';


interface BackButtonProps {
  onPress: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: 34,
      height: 34,
      borderRadius: theme.borderRadius.md,
      backgroundColor: theme.colors.surface,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing.lg,
    },
    icon: {
      color: theme.colors.textPrimary,
      height: 15,
      width: 15
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image resizeMode='contain' style={styles.icon} source={require('../../assets/Icon.png')} />
      {/* <Text style={styles.icon}>‹</Text> */}
    </TouchableOpacity>
  );
};