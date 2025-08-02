import React, { useState, useRef, useEffect } from 'react';
import { TextInput, Clipboard, View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';

interface OTPInputProps {
  length?: number;
  value: string;
  onChangeText: (text: string) => void;
  onComplete?: (code: string) => void;
  autoFocus?: boolean;
}

export const OTPInput: React.FC<OTPInputProps> = ({
  length = 6,
  value,
  onChangeText,
  onComplete,
  autoFocus = true,
}) => {
  const { theme } = useTheme();
  const [focusedIndex, setFocusedIndex] = useState(0);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    if (value.length === length && onComplete) {
      onComplete(value);
    }
  }, [value, length, onComplete]);

  const handleChangeText = (text: string) => {
    // Remove any non-numeric characters
    const numericText = text.replace(/[^0-9]/g, '');
    
    // Limit to the specified length
    const limitedText = numericText.slice(0, length);
    
    onChangeText(limitedText);
    setFocusedIndex(limitedText.length);
  };

  const handlePaste = async () => {
    try {
      const clipboardContent = await Clipboard.getString();
      const numericContent = clipboardContent.replace(/[^0-9]/g, '');
      if (numericContent.length > 0) {
        handleChangeText(numericContent);
      }
    } catch (error) {
      console.log('Failed to read clipboard:', error);
    }
  };

  const getDigitContainerStyle = (isActive: boolean, isFilled: boolean) => {
    let borderColor = theme.colors.border;
    let backgroundColor = theme.colors.surfaceSecondary;

    if (isActive || isFilled) {
      borderColor = theme.colors.primary;
    }
    if (isFilled) {
      backgroundColor = theme.colors.primary + '20';
    }

    return {
      width: 48,
      height: 48,
      borderRadius: theme.borderRadius.lg,
      borderWidth: 2,
      borderColor,
      backgroundColor,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
    };
  };

  const getDigitTextStyle = (isFilled: boolean) => ({
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.semibold,
    color: isFilled ? theme.colors.primary : theme.colors.textSecondary,
  });

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: theme.spacing.lg,
    },
    hiddenInput: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1,
    },
  });

  const digits = Array.from({ length }, (_, index) => {
    const digit = value[index] || '';
    const isActive = index === focusedIndex && value.length === index;
    const isFilled = digit !== '';

    return (
      <View key={index} style={getDigitContainerStyle(isActive, isFilled)}>
        <Text style={getDigitTextStyle(isFilled)}>{digit}</Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      {digits}
      <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        value={value}
        onChangeText={handleChangeText}
        keyboardType="numeric"
        maxLength={length}
        autoFocus={autoFocus}
        onFocus={() => setFocusedIndex(value.length)}
        onBlur={() => setFocusedIndex(-1)}
        textContentType="oneTimeCode"
        autoComplete="sms-otp"
      />
    </View>
  );
};