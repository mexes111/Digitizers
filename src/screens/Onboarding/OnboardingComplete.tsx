import React from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography } from '../../components/typography/Typography';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { BackButton } from '../../components/buttons/BackButton';
import { CurvedLineBackground } from '../../components/layout/CurvedLineBackground';
import { Gap } from '../../components/layout/Gap';

export default function OnboardingComplete() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  const handleStartExploring = () => {
    navigation.navigate('Subscription' as never);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    backgroundContainer: {
      flex: 1,
      position: 'relative',
    },
    header: {
      marginTop: 60,
      paddingHorizontal: 24,
      zIndex: 10,
    },
    content: {
      flex: 1,
    //   justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
      zIndex: 10,
      marginTop: 100
    },
    emojiContainer: {
      marginBottom: theme.spacing.sm,
    },
    emoji: {
      fontSize: 80,
    },
    headerText: {
      fontSize: 23,
      fontWeight: '800',
      color: theme.colors.textPrimary,
      textAlign: 'center',
      marginBottom: theme.spacing.lg,
      lineHeight: 36,
    },
    subHeaderText: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: 24,
      paddingHorizontal: theme.spacing.md,
    },
    buttonContainer: {
      paddingHorizontal: 24,
      paddingBottom: theme.spacing.xl,
    },
    bottomIndicator: {
      width: 134,
      height: 5,
      backgroundColor: theme.colors.textPrimary,
      borderRadius: 2.5,
      alignSelf: 'center',
      marginBottom: theme.spacing.sm,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      
      <View style={styles.backgroundContainer}>
        <CurvedLineBackground variant='large' position='topLeft'/>
        <CurvedLineBackground />
        
        <View style={styles.header}>
          <BackButton onPress={handleBack} />
        </View>

        <View style={styles.content}>
          <View style={styles.emojiContainer}>
            <Image
              source={require('../../assets/profileMedal.png')}
              style={{ width: 100, height: 100 }}
            />
          </View>
          
          <Typography style={styles.headerText}>
            You are All Set!
          </Typography>
          
          <Typography style={styles.subHeaderText}>
            Thanks for sharing your creator card! We will review your post and verify your account within 24 hours.
          </Typography>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Start exploring Digitizers"
            onPress={handleStartExploring}
          />
        </View>

        <View style={styles.bottomIndicator} />
      </View>
    </View>
  );
}