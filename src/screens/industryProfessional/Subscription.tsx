import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, ScrollView, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography } from '../../components/typography/Typography';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { BackButton } from '../../components/buttons/BackButton';
import { PricingCard } from '../../components/cards/PricingCard';
import { CurvedLineBackground } from '../../components/layout/CurvedLineBackground';
import { Gap } from '../../components/layout/Gap';
import { Divider } from '../../components/layout';

type SubscriptionPlan = 'annual' | 'monthly';

export default function ProfSubscription() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan>('annual');

  const handleSubscribe = () => {
    // Handle subscription logic
    console.log('Subscribe to:', selectedPlan);
    // Navigate to main app or success screen
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    backgroundImage: {
      flex: 1,
      opacity: 0.7, // Makes the background transparent
    },
    backgroundContainer: {
      flex: 1,
      position: 'relative',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.colors.background,
      opacity: 0.85, // Additional overlay for better text readability
    },
    header: {
      marginTop: 80,
      paddingHorizontal: 24,
      zIndex: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    logo: {
      width: 40,
      height: 40,
      marginLeft: theme.spacing.xl,
    },
    scrollContainer: {
      flex: 1,
      zIndex: 10,
    },
    content: {
      paddingHorizontal: 24,
      paddingTop: theme.spacing.xl,
    },
    headerText: {
      fontSize: 23,
      fontWeight: '800',
      color: theme.colors.textPrimary,
      marginBottom: theme.spacing.sm,
      lineHeight: 30,
    },
    subHeaderText: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      lineHeight: 20,
      marginBottom: theme.spacing.xl,
    },
    pricingContainer: {
      marginBottom: theme.spacing.xl,
    },
    buttonContainer: {
      paddingHorizontal: 24,
      paddingBottom: theme.spacing.lg,
      zIndex: 10,
    },
    footerText: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: 20,
      paddingHorizontal: theme.spacing.lg,
      marginBottom: theme.spacing.lg,
    },
    bottomIndicator: {
      width: 134,
      height: 5,
      backgroundColor: theme.colors.textPrimary,
      borderRadius: 2.5,
      alignSelf: 'center',
      marginBottom: theme.spacing.sm,
      zIndex: 10,
    },
   buttonLater: {
     backgroundColor: theme.colors.background, 
     elevation: 0,    
    shadowOpacity: 0,
    borderColor: theme.colors.border,
    borderWidth: 1,
    // marginTop: 15
      }
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      <CurvedLineBackground/>
      <ImageBackground
        source={require('../../assets/thumbnail2.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        
        <View style={styles.backgroundContainer}>
          <View style={styles.header}>
            <BackButton onPress={handleBack} />
          </View>
            <Image source={require('../../assets/logoColor.png')} style={styles.logo} />

          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
              <Typography style={styles.headerText}>
                Get discovered by top record labels & industry leaders.
              </Typography>
              <Typography style={styles.subHeaderText}>
Premium visibility. Verified status. Advanced analytics. Get the exposure you deserve.              </Typography>

              <View style={styles.pricingContainer}>
                <PricingCard
                  title="Annual"
                  price="$47.99/year"
                  period="$4.00/Month"
                  badge="Save 50%"
                  isSelected={selectedPlan === 'annual'}
                  onSelect={() => setSelectedPlan('annual')}
                />
                <Divider style={{marginTop: 0}}/>
                <PricingCard
                  title="Monthly"
                  price="$4.99/month"
                  period="$60.00/year"
                  subtitle="Cancel anytime"
                  isSelected={selectedPlan === 'monthly'}
                  onSelect={() => setSelectedPlan('monthly')}
                />
              </View>
            </View>
          </ScrollView>

          <View style={styles.buttonContainer}>
            <PrimaryButton
              title={`Subscribe ${selectedPlan === 'annual' ? 'annually - $47.99' : 'monthly - $4.99'}`}
              onPress={handleSubscribe}
            />
              <Gap size='sm' />
          <PrimaryButton
          style={styles.buttonLater}
            title="I will do it later"
            // onPress={handleContinue}
          />
            <Gap size="sm" />
            
            <Typography style={styles.footerText}>
              Plan renews automatically.{'\n'}
              Cancel anytime before each renewal date.
            </Typography>
          </View>

          <View style={styles.bottomIndicator} />
        </View>
      </ImageBackground>
    </View>
  );
}