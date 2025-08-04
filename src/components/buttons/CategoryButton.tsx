import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, View} from 'react-native';
import { Typography } from '../typography/Typography';

interface CategoryButtonProps {
  title: string;
  icon?: string;
  isSelected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  title,
  icon,
  isSelected = false,
  onPress,
  style,
}) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginRight: 20,
    },
    button: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: isSelected ? '#007AFF' : 'rgba(255, 255, 255, 0.1)',
      borderWidth: isSelected ? 0 : 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
    },
    iconText: {
      fontSize: 24,
    },
    title: {
      fontSize: 12,
      color: isSelected ? '#007AFF' : 'rgba(255, 255, 255, 0.8)',
      textAlign: 'center',
      fontWeight: '500',
    },
  });

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.button}>
        <Typography style={styles.iconText}>{icon || '👤'}</Typography>
      </View>
      <Typography style={styles.title}>{title}</Typography>
    </TouchableOpacity>
  );
};