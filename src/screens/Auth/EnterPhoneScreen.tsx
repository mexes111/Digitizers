import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { SimpleCountryPicker } from '../../components/inputs/SimpleCountryPicker';
import { CurvedLineBackground } from '../../components/layout/CurvedLineBackground';

interface EnterPhoneScreenProps {
  navigation: any;
}

interface Country {
  code: string;
  name: string;
  flag: string;
  callingCode: string;
}

export const EnterPhoneScreen: React.FC<EnterPhoneScreenProps> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    code: 'NG',
    name: 'Nigeria',
    flag: '🇳🇬',
    callingCode: '+234'
  });

  const handleSendOTP = () => {
    if (phoneNumber.length >= 10) {
      navigation.navigate('VerifyOTP', { 
        phoneNumber: selectedCountry.callingCode + phoneNumber 
      });
    }
  };

  const formatPhoneNumber = (text: string) => {
    // Remove all non-numeric characters
    const cleaned = text.replace(/\D/g, '');
    
    // Format as (000) 000-0000
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      let formatted = '';
      if (match[1]) formatted += `(${match[1]}`;
      if (match[1] && match[1].length === 3) formatted += ') ';
      if (match[2]) formatted += match[2];
      if (match[2] && match[2].length === 3) formatted += '-';
      if (match[3]) formatted += match[3];
      return formatted;
    }
    return text;
  };

  const handlePhoneChange = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    setPhoneNumber(cleaned);
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
      // marginBottom: 40,
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
    },
    headerSection: {
      flex: 1,
      marginTop: 50
      // justifyContent: 'center',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 14,
      color: '#8E8E93',
      lineHeight: 22,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1C1C1E',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#38383A',
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginTop: 40,
    },
    phoneInput: {
      flex: 1,
      fontSize: 16,
      color: '#FFFFFF',
      marginLeft: 12,
    },
    buttonContainer: {
      paddingBottom: 50,
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
      <CurvedLineBackground />
      
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image resizeMode='contain' style={{height: 15, width: 15}} source={require('../../assets/Icon.png')} />
        {/* <Typography variant="body" style={{ color: '#FFFFFF', fontSize: 18 }}>←</Typography> */}
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.headerSection}>
          <Typography style={styles.title}>
            Enter your phone number
          </Typography>
          <Typography style={styles.subtitle}>
            We'll send you a verification code to get started securely
          </Typography>

          <View style={styles.inputContainer}>
            <SimpleCountryPicker
              selectedCountry={selectedCountry}
              onCountrySelect={setSelectedCountry}
            />
            <TextInput
              style={styles.phoneInput}
              value={formatPhoneNumber(phoneNumber)}
              onChangeText={handlePhoneChange}
              placeholder="(000) 000-0000"
              placeholderTextColor="#8E8E93"
              keyboardType="phone-pad"
              maxLength={14} // (000) 000-0000
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Send OTP"
            onPress={handleSendOTP}
            disabled={phoneNumber.length < 10}
          />
        </View>
      </View>
    </View>
  );
};