import React from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View, StyleSheet } from 'react-native';
import { ScreenWrapper } from '../../components/layout/ScreenWrapper';
import { FormCard } from '../../components/layout/FormCard';
import { Typography } from '../../components/typography/Typography';
import { PhoneNumberInput } from '../../components/inputs/PhoneNumberInput';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { BackButton } from '../../components/buttons/BackButton';
import { useAuthStore } from '../../stores/authStore';
import { useTheme } from '../../theme/ThemeProvider';

interface EnterPhoneScreenProps {
  navigation: any;
}

export const EnterPhoneScreen: React.FC<EnterPhoneScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const { 
    phoneNumber, 
    countryCode, 
    isLoading, 
    setPhoneNumber, 
    setCountryCode, 
    sendOTP 
  } = useAuthStore();

  const handleSendOTP = async () => {
    if (phoneNumber.length >= 10) {
      await sendOTP();
      navigation.navigate('VerifyOTP');
    }
  };

  const handleCountryChange = (country: any) => {
    setCountryCode(`+${country.callingCode?.[0]}`);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    contentContainer: {
      flex: 1,
    },
    headerContainer: {
      marginBottom: theme.spacing.xl,
    },
    formContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    buttonContainer: {
      paddingBottom: theme.spacing.lg,
    },
    circularBackground: {
      position: 'absolute',
      top: -100,
      right: -100,
      width: 300,
      height: 300,
      borderRadius: 150,
      backgroundColor: theme.colors.primary + '20',
    },
    circularBackground2: {
      position: 'absolute',
      top: 100,
      left: -150,
      width: 200,
      height: 200,
      borderRadius: 100,
      backgroundColor: theme.colors.secondary + '15',
    },
  });

  return (
    <ScreenWrapper>
      <View style={styles.circularBackground} />
      <View style={styles.circularBackground2} />
      
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.contentContainer}>
              <BackButton onPress={() => navigation.goBack()} />
              
              <View style={styles.headerContainer}>
                <Typography variant="heading" color="textPrimary" weight="bold">
                  Enter your phone number
                </Typography>
                <Typography 
                  variant="body" 
                  color="textSecondary" 
                  style={{ marginTop: 8 }}
                >
                  We'll send you a verification code to get started securely
                </Typography>
              </View>

              <View style={styles.formContainer}>
                <FormCard>
                  <PhoneNumberInput
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    onCountryChange={handleCountryChange}
                    placeholder="(000) 000-0000"
                  />
                </FormCard>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <PrimaryButton
                title="Send OTP"
                onPress={handleSendOTP}
                loading={isLoading}
                disabled={phoneNumber.length < 10}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};