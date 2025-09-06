import React, { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { ScreenWrapper } from '../../components/layout/ScreenWrapper';
import { Typography } from '../../components/typography/Typography';
import { useTheme } from '../../theme/ThemeProvider';

interface SplashScreenProps {
  navigation: any;
}

export default function SplashScreen({ navigation }: SplashScreenProps) {
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('WelcomeCarousel');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: theme.spacing.xl,
    },
  });

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Typography 
            variant="heading" 
            color="primary" 
            weight="bold"
            style={{ fontSize: 32, marginBottom: 8 }}
          >
            Digitizers
          </Typography>
          <Typography 
            variant="body" 
            color="textSecondary"
            style={{ marginBottom: 20 }}
          >
            Where Talents Get Discovered
          </Typography>
        </View>
        <ActivityIndicator size="large" color="#FF6B35" />
      </View>
    </ScreenWrapper>
  );
}
