import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography } from '../../components/typography/Typography';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { SecondaryButton } from '../../components/buttons/SecondaryButton';
import { BackButton } from '../../components/buttons/BackButton';
import { CreatorCard } from '../../components/cards/CreatorCard';
import { CurvedLineBackground } from '../../components/layout/CurvedLineBackground';
import { Gap } from '../../components/layout/Gap';

export default function CreatorCardScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  const handleDownload = () => {
    // Handle download logic
    console.log('Download creator card');
  };

  const handleShare = () => {
    // Handle share logic
    console.log('Share creator card');
  };

  const handleDone = () => {
    navigation.navigate('OnboardingComplete' as never);
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
      paddingHorizontal: 24,
      paddingTop: theme.spacing.lg,
      zIndex: 10,
    },
    cardContainer: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
      // paddingVertical: theme.spacing.xl,
    },
    card: {
      width: '95%',
      alignSelf: 'center'
    },
    descriptionText: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: 20,
      marginTop: theme.spacing.lg,
      paddingHorizontal: theme.spacing.md,
    },
    actionButtonsContainer: {
      flexDirection: 'row',
      gap: theme.spacing.md,
      marginBottom: 50,
    },
    actionButton: {
      flex: 1,
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
      {/* <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} /> */}
      
      <View style={styles.backgroundContainer}>
        <CurvedLineBackground />
        
        <View style={styles.header}>
          <BackButton onPress={handleBack} />
        </View>
    
        <View style={styles.content}>
            <CreatorCard
              profileImage={require('../../assets/Avatar.png')}
              name="Kemi Adebayo"
              title="Musician • Songwriter"
              location="Lagos, Nigeria"
              style={styles.card}
            />
          <View style={styles.cardContainer}>
      
            
            <Typography style={styles.descriptionText}>
              This unique creator card showcases your profile and helps verify your identity on social media.
            </Typography>
          </View>

          <View style={styles.actionButtonsContainer}>
            <SecondaryButton
              title="Download"
              onPress={handleDownload}
              style={styles.actionButton}
            />
            <SecondaryButton
              title="Share now"
              onPress={handleShare}
              style={styles.actionButton}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Done"
            onPress={handleDone}
          />
        </View>

        <View style={styles.bottomIndicator} />
      </View>
    </View>
  );
}