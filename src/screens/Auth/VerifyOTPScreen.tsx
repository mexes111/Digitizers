import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { CurvedLineBackground } from '../../components/layout/CurvedLineBackground';

interface VerifyOTPScreenProps {
  navigation: any;
  route: any;
}

export const VerifyOTPScreen: React.FC<VerifyOTPScreenProps> = ({ navigation, route }) => {
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);
  const phoneNumber = route?.params?.phoneNumber || '+2348228374732';
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otpCode];
    newOtp[index] = text;
    setOtpCode(newOtp);

    // Auto-focus next input
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !otpCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOTP = () => {
    const fullOtp = otpCode.join('');
    if (fullOtp.length === 6) {
      navigation.navigate('EmailSignupForm');
    }
  };

  const handleResendOTP = () => {
    // Resend OTP logic
    console.log('Resending OTP...');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      paddingHorizontal: 20,
    },
    backButton: {
      width: 34,
      height: 34,
      backgroundColor: '#1C1C1E',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 40,
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
    },
    headerSection: {
      flex: 1,
      marginTop: 20
      // justifyContent: 'center',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 13,
      color: '#8E8E93',
      lineHeight: 22,
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 40,
      marginBottom: 20,
    },
    otpInput: {
      width: 48,
      height: 48,
      backgroundColor: '#1C1C1E',
      borderRadius: 8,
      borderWidth: 2,
      borderColor: '#38383A',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    otpInputFocused: {
      borderColor: '#007AFF',
    },
    otpInputFilled: {
      borderColor: '#007AFF',
      backgroundColor: '#007AFF20',
    },
    resendContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    resendText: {
      fontSize: 16,
      color: '#8E8E93',
    },
    resendLink: {
      color: '#007AFF',
    },
    buttonContainer: {
      paddingBottom: 80,
    },
    circularBackground: {
      position: 'absolute',
      top: -100,
      right: -100,
      width: 300,
      height: 300,
      borderRadius: 150,
      backgroundColor: '#007AFF20',
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      {/* Decorative background */}
      <CurvedLineBackground/>
      
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image resizeMode='contain' style={{height: 15, width: 15}} source={require('../../assets/Icon.png')} />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.headerSection}>
          <Typography style={styles.title}>
            Enter verification code
          </Typography>
          <Typography style={styles.subtitle}>
            We sent a 6-digit code to {phoneNumber}
          </Typography>

          <View style={styles.otpContainer}>
            {otpCode.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={[
                  styles.otpInput,
                  digit && styles.otpInputFilled,
                ]}
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
                keyboardType="numeric"
                maxLength={1}
                autoFocus={index === 0}
              />
            ))}
          </View>

        
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Verify OTP"
            onPress={handleVerifyOTP}
            disabled={otpCode.join('').length !== 6}
          />
            <View style={styles.resendContainer}>
            <TouchableOpacity onPress={handleResendOTP}>
              <Typography style={styles.resendText}>
                Didn't receive code? <Typography style={styles.resendLink}>Resend OTP</Typography>
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};