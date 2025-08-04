import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';
import { ScreenContainer } from '../../components/layout/ScreenContainer';
import { ScreenHeader } from '../../components/layout/ScreenHeader';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { ScreenHeaderProgress } from '../../components/layout/ScreenHeaderProgress';

interface IdentityVerificationScreenProps {
  navigation?: any;
}

export default function IdentityVerificationScreen({ navigation }: IdentityVerificationScreenProps) {
  const nav = useNavigation();

  const handleStartVerification = () => {
    // Navigate to the next screen or handle verification process
    (navigation || nav).navigate('CACDocUpload');
  };

  const handleBack = () => {
    (navigation || nav).goBack();
  };

  const VerificationStep = ({ icon, text }: { icon: string; text: string }) => (
    <View style={styles.stepContainer}>
      <View style={styles.stepIcon}>
        <Image resizeMode='contain' style={{height: 40, width: 40}} source={icon}/>
        {/* <Typography style={styles.stepIconText}>{icon}</Typography> */}
      </View>
      <Typography style={styles.stepText}>{text}</Typography>
    </View>
  );

  const styles = StyleSheet.create({
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: 20,
    },
    progressBar: {
      width: 100,
      height: 4,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 2,
      marginRight: 8,
      overflow: 'hidden',
    },
    progressFill: {
      width: '66%',
      height: '100%',
      backgroundColor: '#007AFF',
      borderRadius: 2,
    },
    progressText: {
      fontSize: 14,
      color: 'rgba(255, 255, 255, 0.7)',
      fontWeight: '500',
    },
    scrollContainer: {
      flex: 1,
    },
    contentContainer: {
      paddingBottom: 20,
      marginTop: 20
    },
    timeContainer: {
      marginBottom: 40,
    },
    timeText: {
      fontSize: 16,
      color: 'rgba(255, 255, 255, 0.7)',
      lineHeight: 24,
    },
    stepsContainer: {
      marginBottom: 40,
    },
    stepContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 24,
    },
    stepIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'rgba(0, 122, 255, 0.2)',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
      marginTop: 2,
    },
    stepIconText: {
      fontSize: 18,
    },
    stepText: {
      flex: 1,
      fontSize: 14,
      color: '#FFFFFF',
      lineHeight: 24,
    //   fontWeight: '500',
    },
    termsContainer: {
      marginTop: 'auto',
      marginBottom: 20,
      alignItems: 'center',
    },
    termsText: {
      fontSize: 14,
      color: 'rgba(255, 255, 255, 0.7)',
      textAlign: 'center',
      lineHeight: 20,
    },
    termsLink: {
      color: '#007AFF',
      fontWeight: '500',
    },
    buttonContainer: {
      paddingBottom: 60,
    },
  });

  return (
    <ScreenContainer showCurvedLine={true}>
      <ScreenHeaderProgress
      currentStep={2}
      totalSteps={3}
        title="We need to verify your identity"
        subtitle=" It will take less than 5 mins"
        onBackPress={handleBack}
      />

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          {/* <View style={styles.timeContainer}>
            <Typography style={styles.timeText}>
              It will take less than 5 mins
            </Typography>
          </View> */}

          <View style={styles.stepsContainer}>
            <VerificationStep
              icon={require('../../assets/darkmic.png')}
              text="Prepare a valid government issued identity document e.g Passport, Drivers License, Company CAC"
            />
            
            <VerificationStep
              icon={require('../../assets/darkmic.png')}
              text="Make sure you are in a well lit room"
            />
            
            <VerificationStep
              icon={require('../../assets/darkmic.png')}
              text="Get ready to take a selfie and photos of your ID"
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.termsContainer}>
        <Typography style={styles.termsText}>
          By continuing, you agree to our{' '}
          <Typography style={styles.termsLink}>Terms of Service</Typography>
          {' '}and{' '}
          <Typography style={styles.termsLink}>Privacy Policy</Typography>
        </Typography>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Start Verification"
          onPress={handleStartVerification}
        />
      </View>
    </ScreenContainer>
  );
}