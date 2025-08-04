import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Typography } from '../typography/Typography';

interface DropdownFieldProps {
  value?: string;
  placeholder: string;
  onPress: () => void;
  icon?: React.ReactNode;
}

export const DropdownField: React.FC<DropdownFieldProps> = ({
  value,
  placeholder,
  onPress,
  icon,
}) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    inputWrapper: {
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 16,
      // backgroundColor: 'rgba(255, 255, 255, 0.05)',
      paddingHorizontal: 20,
      // paddingVertical: 18,
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: 56,
    },
    inputIcon: {
      width: 20,
      height: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 4,
      marginRight: 16,
    },
    textInput: {
      flex: 1,
      fontSize: 14,
      color: '#FFFFFF',
      fontWeight: '500',
    },
    dropdownIcon: {
      fontSize: 16,
      color: 'rgba(255, 255, 255, 0.5)',
      marginLeft: 12,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputWrapper} onPress={onPress}>
        {icon || <View style={styles.inputIcon} />}
        <Typography style={{
          ...styles.textInput,
          opacity: value ? 1 : 0.5
        }}>
          {value || placeholder}
        </Typography>
        <Typography style={styles.dropdownIcon}>▼</Typography>
      </TouchableOpacity>
    </View>
  );
};