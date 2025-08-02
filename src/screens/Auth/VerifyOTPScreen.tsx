import React, { useEffect } from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View, TouchableOpacity, StyleSheet } from 'react-native';
import { ScreenWrapper } from '../../components/layout/ScreenWrapper';
import { FormCard } from '../../components/layout/FormCard';
import { Typography } from '../../components/typography/Typography';
import { OTPInput } from '../../components/inputs/OTPInput';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { BackButton } from '../../components/buttons/BackButton';
import { useAuthStore } from '../../stores/authStore';
import { useTheme } from '../../theme/ThemeProvider';

interface VerifyOTPScreenProps {
  navigation: any;
}

export const VerifyOTPScreen: React.FC<VerifyOTPScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const { 
    otpCode, 
    phoneNumber,
    countryCode,
    isLoading, 
    resendTimer,
    canResend,
    setOtpCode, 
    verifyOTP,
    resendOTP
  } = useAuthStore();

  const handleVerifyOTP = async () => {
    if (otpCode.length === 6) {
      await verifyOTP();
      // Navigate to next screen on success
      // navigation.navigate('Home');
    }
  };

  const handleResendOTP = async () => {
    if (canResend) {
      await resendOTP();
    }
  };

  const formatPhoneNumber = (phone: string, code: string) => {
    return `${code}${phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1$2$3')}`;
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
    resendContainer: {
      alignItems: 'center',
      marginTop: theme.spacing.lg,
    },
    resendButton: {
      opacity: 1,
    },
    resendButtonDisabled: {
      opacity: 0.5,
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
                  Enter verification code
                </Typography>
                <Typography 
                  variant="body" 
                  color="textSecondary" 
                  style={{ marginTop: 8 }}
                >
                  We sent a 6-digit code to {formatPhoneNumber(phoneNumber, countryCode)}
                </Typography>
              </View>

              <View style={styles.formContainer}>
                <FormCard>
                  <OTPInput
                    value={otpCode}
                    onChangeText={setOtpCode}
                    onComplete={handleVerifyOTP}
                    length={6}
                    autoFocus={true}
                  />
                  
                  <View style={styles.resendContainer}>
                    <TouchableOpacity 
                      style={[
                        styles.resendButton,
                        !canResend && styles.resendButtonDisabled
                      ]}
                      disabled={!canResend} 
                      onPress={handleResendOTP}
                    >
                      <Typography 
                        variant="body" 
                        color={canResend ? "primary" : "textSecondary"}
                        weight="medium"
                      >
                        {canResend 
                          ? "Didn't receive code? Resend OTP" 
                          : `Resend OTP in ${resendTimer}s`
                        }
                      </Typography>
                    </TouchableOpacity>
                  </View>
                </FormCard>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <PrimaryButton
                title="Verify OTP"
                onPress={handleVerifyOTP}
                loading={isLoading}
                disabled={otpCode.length !== 6}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};