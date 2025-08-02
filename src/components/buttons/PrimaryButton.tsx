import React from 'react';
import { TouchableOpacity, ActivityIndicator, StyleSheet, ViewStyle } from 'react-native';
import { Typography } from '../typography/Typography';

interface PrimaryButtonProps {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  variant?: 'primary' | 'secondary';
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  loading = false,
  disabled = false,
  onPress,
  style,
  variant = 'primary',
}) => {
  const isDisabled = disabled || loading;

  const styles = StyleSheet.create({
    button: {
      backgroundColor: isDisabled 
        ? 'rgba(0, 122, 255, 0.3)' 
        : variant === 'secondary' 
          ? 'rgba(255, 255, 255, 0.1)'
          : '#007AFF',
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      shadowColor: isDisabled ? 'transparent' : '#007AFF',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: isDisabled ? 0 : 0.3,
      shadowRadius: 16,
      elevation: isDisabled ? 0 : 8,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      color: variant === 'secondary' ? '#007AFF' : '#FFFFFF',
      marginLeft: loading ? 8 : 0,
    },
  });

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
    >
      {loading && (
        <ActivityIndicator
          size="small"
          color={variant === 'secondary' ? '#007AFF' : '#FFFFFF'}
        />
      )}
      <Typography style={styles.buttonText}>
        {loading ? 'Loading...' : title}
      </Typography>
    </TouchableOpacity>
  );
};