import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  StatusBar, 
  TouchableOpacity, 
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '../../stores/authStore';

interface EnterPhoneScreenProps {
  navigation?: any;
}

export const EnterPhoneScreen: React.FC<EnterPhoneScreenProps> = ({ navigation }) => {
  const nav = useNavigation();
  const { 
    phoneNumber, 
    countryCode, 
    isLoading, 
    setPhoneNumber, 
    setCountryCode, 
    sendOTP 
  } = useAuthStore();

  const [selectedCountry, setSelectedCountry] = useState<Country>({
    cca2: 'NG' as CountryCode,
    name: 'Nigeria',
    callingCode: ['234'],
    flag: '🇳🇬'
  });
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const handleSendOTP = async () => {
    if (phoneNumber.length >= 10) {
      await sendOTP();
      (navigation || nav).navigate('VerifyOTP', {
        phoneNumber,
        countryCode: `+${selectedCountry.callingCode[0]}`
      });
    }
  };

  const handleBack = () => {
    (navigation || nav).goBack();
  };

  const onSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    setCountryCode(`+${country.callingCode[0]}`);
    setShowCountryPicker(false);
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
    curvedLine: {
      position: 'absolute',
      top: -90,
      right: -100,
      width: 210,
      height: 220,
      borderRadius: 150,
      borderWidth: 2,
      borderColor: 'rgba(0, 200, 255, 0.2)',
      borderStyle: 'solid',
    },
    content: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 60,
      zIndex: 10,
    },
    backButton: {
      width: 44,
      height: 44,
      borderRadius: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 60,
    },
    backButtonText: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: '600',
    },
    headerContainer: {
      marginBottom: 80,
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
    phoneInputContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 16,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      height: 64,
      marginBottom: 40,
    },
    countrySelector: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 12,
      borderRightWidth: 1,
      borderRightColor: 'rgba(255, 255, 255, 0.2)',
      marginRight: 12,
    },
    flagText: {
      fontSize: 24,
      marginRight: 8,
    },
    dropdownIcon: {
      fontSize: 16,
      color: '#A8A8A8',
    },
    phoneInput: {
      flex: 1,
      fontSize: 16,
      color: '#FFFFFF',
      paddingVertical: 0,
    },
    sendButton: {
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
    sendButtonDisabled: {
      backgroundColor: 'rgba(0, 122, 255, 0.3)',
      shadowOpacity: 0,
      elevation: 0,
    },
    sendButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
    },
  });

  const isPhoneValid = phoneNumber.length >= 10;

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" />
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.backgroundContainer}>
          {/* Background decorative elements */}
          <View style={styles.curvedLine} />
          
          <View style={styles.content}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <Typography style={styles.backButtonText}>‹</Typography>
            </TouchableOpacity>
            
            <View style={styles.headerContainer}>
              <Typography style={styles.headerText}>
                Enter your phone number
              </Typography>
              <Typography style={styles.subHeaderText}>
                We'll send you a verification code to get started securely
              </Typography>
            </View>

            <View style={styles.phoneInputContainer}>
              <TouchableOpacity 
                style={styles.countrySelector}
                onPress={() => setShowCountryPicker(true)}
              >
                <Typography style={styles.flagText}>
                  {selectedCountry.flag}
                </Typography>
                <Typography style={styles.dropdownIcon}>▼</Typography>
              </TouchableOpacity>
              
              <TextInput
                style={styles.phoneInput}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder={`+${selectedCountry.callingCode[0]} (000) 000-0000`}
                placeholderTextColor="#666666"
                keyboardType="phone-pad"
                autoFocus={true}
                maxLength={15}
              />
            </View>

            <TouchableOpacity
              style={[
                styles.sendButton,
                !isPhoneValid && styles.sendButtonDisabled
              ]}
              onPress={handleSendOTP}
              disabled={!isPhoneValid || isLoading}
              activeOpacity={0.8}
            >
              <Typography style={styles.sendButtonText}>
                {isLoading ? 'Sending...' : 'Send OTP'}
              </Typography>
            </TouchableOpacity>
          </View>

          <CountryPicker
            countryCode={selectedCountry.cca2}
            withFilter
            withFlag
            withCountryNameButton={false}
            withAlphaFilter
            withCallingCode
            onSelect={onSelectCountry}
            visible={showCountryPicker}
            onClose={() => setShowCountryPicker(false)}
            theme={{
              backgroundColor: '#1C1C1E',
              onBackgroundTextColor: '#FFFFFF',
              fontSize: 16,
              filterPlaceholderTextColor: '#666666',
              activeOpacity: 0.7,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default EnterPhoneScreen;