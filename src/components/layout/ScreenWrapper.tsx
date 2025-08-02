import React from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';

interface ScreenWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  backgroundColor,
}) => {
  const { theme } = useTheme();
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor || theme.colors.background,
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: theme.spacing.lg,
      paddingTop: theme.spacing.md,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.contentContainer}>{children}</View>
    </SafeAreaView>
  );
};