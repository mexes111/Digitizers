import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface FormInputFieldProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  autoComplete?: string;
}

export const FormInputField: React.FC<FormInputFieldProps> = ({
  value,
  onChangeText,
  placeholder,
  icon,
  autoComplete,
  ...textInputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    inputWrapper: {
      borderWidth: 1,
      borderColor: isFocused ? '#007AFF' : 'rgba(255, 255, 255, 0.2)',
      borderRadius: 16,
      // backgroundColor: isFocused ? 'rgba(0, 122, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
      paddingHorizontal: 20,
      // paddingVertical: 5,
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
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        {icon || <View style={styles.inputIcon} />}
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoComplete={autoComplete}
          {...textInputProps}
        />
      </View>
    </View>
  );
};