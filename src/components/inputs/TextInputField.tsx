import React from 'react';
import { TextInput, View, StyleSheet, KeyboardTypeOptions } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';

interface TextInputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  editable?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  autoFocus = false,
  maxLength,
  editable = true,
  multiline = false,
  numberOfLines = 1,
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
    },
    input: {
      backgroundColor: theme.colors.surfaceSecondary,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.md,
      fontSize: theme.fontSize.md,
      color: theme.colors.textPrimary,
      minHeight: 48,
      borderWidth: 1,
      borderColor: theme.colors.border,
      ...(multiline && {
        height: numberOfLines * 20 + 28,
        textAlignVertical: 'top',
      }),
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#8E8E93"
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoFocus={autoFocus}
        maxLength={maxLength}
        editable={editable}
        multiline={multiline}
        numberOfLines={numberOfLines}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};