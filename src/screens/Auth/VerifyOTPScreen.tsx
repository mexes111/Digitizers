import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Typography } from '../../components/typography/Typography';
import { OtpInput } from 'react-native-otp-entry';
import { useNavigation, useRoute } from '@react-navigation/native';
import { authStore } from '../../stores/authStore';

interface VerifyOTPScreenProps {
  navigation?: any;
  route?: {
    params?: {
      phoneNumber?: string;
      countryCode?: string;
    };
  };
}

export const VerifyOTPScreen: React.FC<VerifyOTPScreenProps> = ({ navigation, route }) => {
  const nav = useNavigation();
  const [otpCode, setOtpCode] = useState('');
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  // Get phone number from route params or default
  const phoneNumber = route?.params?.phoneNumber || '8228374732';
  const countryCode = route?.params?.countryCode || '+234';

  useEffect(() => {
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleVerifyOTP = () => {
    if (otpCode.length === 6) {
      // Navigate to next screen or handle verification
      console.log('Verifying OTP:', otpCode);
      // (navigation || nav).navigate('NextScreen');
    }
  };

  const handleResendOTP = () => {
    if (canResend) {
      setResendTimer(30);
      setCanResend(false);
      console.log('Resending OTP...');
    }
  };

  const handleBack = () => {
    (navigation || nav).goBack();
  };

  const handleOtpComplete = (code: string) => {
    setOtpCode(code);
    (navigation || nav).navigate('EmailSignupForm');
    setTimeout(() => {
      handleVerifyOTP();
    }, 500);
  };

  const formatPhoneNumber = (phone: string, code: string) => {
    return `${code}${phone}`;
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0A0A0A',
    },
    backgroundContainer: {
      flex: 1,
      position: 'relative',
    },
    partialBackgroundImage: {
      position: 'absolute',
      top: -100,
       right: -140,
      width: 220,
      height: 180,
      opacity: 0.3,
      zIndex: 1,
      resizeMode: 'cover',
    },
    curvedLine: {
      position: 'absolute',
      top: -50,
      right: -120,
      width: 220,
      height: 180,
      borderRadius: 150,
      borderWidth: 2,
      borderColor: 'rgba(0, 200, 255, 0.2)',
      borderStyle: 'solid',
    },
    gradientOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '50%',
      backgroundColor: 'rgba(0, 122, 255, 0.15)',
      zIndex: 2,
    },
    content: {
      flex: 1,
      paddingHorizontal: 32,
      marginTop: 60,
      zIndex: 10,
    },
    backButton: {
      width: 44,
      height: 44,
      borderRadius: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 20
    },
    backButtonText: {
      fontSize: 22,
      color: '#FFFFFF',
      fontWeight: '600',
    },
    headerContainer: {
      marginBottom: 60,
    },
    headerText: {
      fontSize: 24,
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: 12,
      lineHeight: 40,
    },
    subHeaderText: {
      fontSize: 16,
      color: '#A8A8A8',
      lineHeight: 24,
    },
    otpContainer: {
      marginBottom: 40,
      // paddingHorizontal: 10,
    },
    resendContainer: {
      alignItems: 'center',
      marginBottom: 60,
    },
    resendButton: {
      paddingVertical: 12,
      paddingHorizontal: 20,
    },
    resendText: {
      fontSize: 16,
      color: '#007AFF',
      fontWeight: '500',
    },
    resendTextDisabled: {
      color: '#666666',
    },
    verifyButton: {
      backgroundColor: '#007AFF',
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 'auto',
      marginBottom: 60,
      shadowColor: '#007AFF',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 8,
    },
    verifyButtonDisabled: {
      backgroundColor: 'rgba(0, 122, 255, 0.3)',
      shadowOpacity: 0,
      elevation: 0,
    },
    verifyButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
    },
  });

  const isOtpComplete = otpCode.length === 6;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" />
      
      <View style={styles.backgroundContainer}>
        {/* Background decorative elements */}
        <Image 
          source={require('../../assets/thumbnail1.png')} 
          style={styles.partialBackgroundImage}
        />
        <View style={styles.curvedLine} />
        
        {/* Simple overlay for bottom part - replace LinearGradient */}
        {/* <View style={styles.gradientOverlay} /> */}
        
        <View style={styles.content}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Typography style={styles.backButtonText}>‹</Typography>
          </TouchableOpacity>
          
          <View style={styles.headerContainer}>
            <Typography style={styles.headerText}>
              Enter verification code
            </Typography>
            <Typography style={styles.subHeaderText}>
              We sent a 6-digit code to <Typography style={{fontWeight: '700'}}>{formatPhoneNumber(phoneNumber, countryCode)}</Typography>
            </Typography>
          </View>

          <View style={styles.otpContainer}>
            <OtpInput
              numberOfDigits={6}
              onTextChange={setOtpCode}
              onFilled={handleOtpComplete}
              autoFocus={true}
              focusColor="#007AFF"
              theme={{
                containerStyle: {
                  marginVertical: 0,
                },
                pinCodeContainerStyle: {
                  width: 48,
                  height: 56,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  marginHorizontal: 6,
                },
                pinCodeTextStyle: {
                  fontSize: 20,
                  fontWeight: '600',
                  color: '#FFFFFF',
                },
                focusedPinCodeContainerStyle: {
                  borderColor: '#007AFF',
                  backgroundColor: 'rgba(0, 122, 255, 0.1)',
                },
                filledPinCodeContainerStyle: {
                  borderColor: '#007AFF',
                  backgroundColor: 'rgba(0, 122, 255, 0.1)',
                },
                focusStickStyle: {
                  backgroundColor: '#007AFF',
                  height: 2,
                  width: 20,
                },
              }}
              textInputProps={{
                keyboardType: 'numeric',
                keyboardAppearance: 'dark',
              }}
            />
          </View>

          <View style={styles.resendContainer}>
            <TouchableOpacity 
              style={styles.resendButton}
              onPress={handleResendOTP}
              disabled={!canResend}
            >
              <Typography 
                style={[
                  styles.resendText,
                  !canResend && styles.resendTextDisabled
                ]}
              >
                {canResend 
                  ? "Didn't receive code? Resend OTP" 
                  : `Resend OTP in ${resendTimer}s`
                }
              </Typography>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[
              styles.verifyButton,
              !isOtpComplete && styles.verifyButtonDisabled
            ]}
            onPress={handleVerifyOTP}
            disabled={!isOtpComplete}
            activeOpacity={0.8}
          >
            <Typography style={styles.verifyButtonText}>
              Verify OTP
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};