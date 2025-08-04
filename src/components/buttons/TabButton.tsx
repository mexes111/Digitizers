import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Typography } from '../typography/Typography';

interface TabButtonProps {
  title: string;
  isActive?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

export const TabButton: React.FC<TabButtonProps> = ({
  title,
  isActive = false,
  onPress,
  style,
}) => {
  const styles = StyleSheet.create({
    button: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderBottomWidth: 2,
      borderBottomColor: isActive ? '#007AFF' : 'transparent',
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      color: isActive ? '#007AFF' : 'rgba(255, 255, 255, 0.6)',
    },
  });

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Typography style={styles.title}>{title}</Typography>
    </TouchableOpacity>
  );
};