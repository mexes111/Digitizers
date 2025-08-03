import React from 'react';
import { View, TextInput, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography } from '../typography/Typography';

interface SocialMediaInputProps {
  platform: string;
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  style?: ViewStyle;
}

export const SocialMediaInput: React.FC<SocialMediaInputProps> = ({
  platform,
  icon,
  placeholder,
  value,
  onChangeText,
  style,
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: `${theme.colors.textPrimary}33`,
      borderRadius: theme.borderRadius.xl,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.md,
    //   backgroundColor: theme.colors.surface,
      minHeight: 56,
    },
    iconContainer: {
      marginRight: theme.spacing.sm,
    },
    prefixText: {
      fontSize: theme.fontSize.md,
      color: theme.colors.textSecondary,
      marginRight: theme.spacing.xs,
    },
    input: {
      flex: 1,
      fontSize: theme.fontSize.md,
      color: theme.colors.textPrimary,
      padding: 0,
    },
  });

  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputWrapper}>
        <View style={styles.iconContainer}>
          {icon}
        </View>
        <Typography style={styles.prefixText}>@</Typography>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={`${theme.colors.textPrimary}80`}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    </View>
  );
};