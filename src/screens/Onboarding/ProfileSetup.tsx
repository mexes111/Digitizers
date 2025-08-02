import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar, TextInput, ScrollView } from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';
import { CurvedLineBackground } from '../../components/layout/CurvedLineBackground';
import { BackButton } from '../../components/buttons/BackButton';
// import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';

interface ProfileSetupProps {
  navigation?: any;
}

export default function ProfileSetup({ navigation }: ProfileSetupProps) {
  const nav = useNavigation();
  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    languages: '',
    age: '',
    experienceLevel: '',
  });
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleContinue = () => {
    if (formData.fullName.trim()) {
      (navigation || nav).navigate('UploadWork');
    }
  };

  const handleBack = () => {
    (navigation || nav).goBack();
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    updateFormData('country', country.name);
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
    header: {
      marginTop: 80,
      paddingHorizontal: 24,
      paddingBottom: 20,
      zIndex: 10,
    },
    scrollContainer: {
      flex: 1,
      zIndex: 10,
    },
    content: {
      paddingHorizontal: 24,
      paddingBottom: 40,
    },
    profileImageContainer: {
      alignItems: 'center',
      marginBottom: 40,
    },
    profileImageWrapper: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#007AFF',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      marginBottom: 16,
    },
    cameraIcon: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 3,
      borderColor: '#0A0A0A',
    },
    headerText: {
      fontSize: 28,
      fontWeight: '800',
      color: '#FFFFFF',
      marginBottom: 12,
      textAlign: 'center',
    },
    subHeaderText: {
      fontSize: 16,
      color: '#A8A8A8',
      marginBottom: 40,
      textAlign: 'center',
      lineHeight: 24,
    },
    formContainer: {
      marginBottom: 40,
    },
    inputContainer: {
      marginBottom: 20,
    },
    inputWrapper: {
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      paddingHorizontal: 20,
      paddingVertical: 18,
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: 56,
    },
    inputWrapperFocused: {
      borderColor: '#007AFF',
      backgroundColor: 'rgba(0, 122, 255, 0.1)',
    },
    iconContainer: {
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
    textInput: {
      flex: 1,
      fontSize: 16,
      color: '#FFFFFF',
      fontWeight: '500',
    },
    continueButton: {
      backgroundColor: '#007AFF',
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 24,
      marginBottom: 20,
      shadowColor: '#007AFF',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 8,
    },
    continueButtonDisabled: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      shadowOpacity: 0,
    },
    continueButtonText: {
      fontSize: 18,
      fontWeight: '700',
      color: '#FFFFFF',
    },
    continueButtonTextDisabled: {
      color: 'rgba(255, 255, 255, 0.5)',
    },
    termsContainer: {
      paddingHorizontal: 24,
      alignItems: 'center',
      marginBottom: 40,
    },
    termsText: {
      fontSize: 14,
      color: '#A8A8A8',
      textAlign: 'center',
      lineHeight: 20,
    },
    termsLink: {
      color: '#007AFF',
      fontWeight: '600',
    },
    bottomIndicator: {
      width: 134,
      height: 5,
      backgroundColor: '#FFFFFF',
      borderRadius: 2.5,
      alignSelf: 'center',
      marginBottom: 8,
    },
    countryPickerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    countryFlag: {
      marginRight: 8,
    },
  });

  const isButtonEnabled = formData.fullName.trim().length > 0;

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" />
      
      <View style={styles.backgroundContainer}>
        <CurvedLineBackground/>
        
        <View style={styles.header}>
         <BackButton onPress={handleBack}/>
        </View>

        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.profileImageContainer}>
              <TouchableOpacity style={styles.profileImageWrapper}>
                <Ionicons name="person" size={40} color="#FFFFFF" />
                <View style={styles.cameraIcon}>
                  <Ionicons name="camera" size={16} color="#000000" />
                </View>
              </TouchableOpacity>
            </View>

            <Typography style={styles.headerText}>
              Set up profile
            </Typography>
            <Typography style={styles.subHeaderText}>
              Enter details below for a personalized experience
            </Typography>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <View style={[
                  styles.inputWrapper,
                  formData.fullName ? styles.inputWrapperFocused : null
                ]}>
                  <View style={styles.iconContainer}>
                    <Ionicons name="person-outline" size={20} color="rgba(255, 255, 255, 0.7)" />
                  </View>
                  <TextInput
                    style={styles.textInput}
                    placeholder="First and last name"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    value={formData.fullName}
                    onChangeText={(text) => updateFormData('fullName', text)}
                    autoCapitalize="words"
                    autoComplete="name"
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <TouchableOpacity 
                  style={styles.inputWrapper}
                  onPress={() => setShowCountryPicker(true)}
                >
                  <View style={styles.iconContainer}>
                    <Ionicons name="flag-outline" size={20} color="#4CAF50" />
                  </View>
                  <View style={styles.countryPickerContainer}>
                    {selectedCountry && (
                      <CountryPicker
                        countryCode={selectedCountry.cca2}
                        withFlag
                        withEmoji
                        withFilter={false}
                        withCallingCode={false}
                        withAlphaFilter={false}
                        visible={false}
                        containerButtonStyle={styles.countryFlag}
                      />
                    )}
                    <Typography style={{
                      ...styles.textInput,
                      opacity: formData.country ? 1 : 0.5
                    }}>
                      {formData.country || 'Select Country'}
                    </Typography>
                  </View>
                  <Ionicons name="chevron-down" size={16} color="rgba(255, 255, 255, 0.5)" />
                </TouchableOpacity>
              </View>

              <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.inputWrapper}>
                  <View style={styles.iconContainer}>
                    <Ionicons name="language-outline" size={20} color="rgba(255, 255, 255, 0.7)" />
                  </View>
                  <Typography style={{
                    ...styles.textInput,
                    opacity: formData.languages ? 1 : 0.5
                  }}>
                    {formData.languages || 'Select Languages you speak'}
                  </Typography>
                  <Ionicons name="chevron-down" size={16} color="rgba(255, 255, 255, 0.5)" />
                </TouchableOpacity>
              </View>

              <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.inputWrapper}>
                  <View style={styles.iconContainer}>
                    <Ionicons name="calendar-outline" size={20} color="rgba(255, 255, 255, 0.7)" />
                  </View>
                  <Typography style={{
                    ...styles.textInput,
                    opacity: formData.age ? 1 : 0.5
                  }}>
                    {formData.age || 'Age'}
                  </Typography>
                  <Ionicons name="chevron-down" size={16} color="rgba(255, 255, 255, 0.5)" />
                </TouchableOpacity>
              </View>

              <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.inputWrapper}>
                  <View style={styles.iconContainer}>
                    <Ionicons name="star-outline" size={20} color="rgba(255, 255, 255, 0.7)" />
                  </View>
                  <Typography style={{
                    ...styles.textInput,
                    opacity: formData.experienceLevel ? 1 : 0.5
                  }}>
                    {formData.experienceLevel || 'Experience Level'}
                  </Typography>
                  <Ionicons name="chevron-down" size={16} color="rgba(255, 255, 255, 0.5)" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={[
            styles.continueButton,
            !isButtonEnabled && styles.continueButtonDisabled
          ]}
          onPress={handleContinue}
          disabled={!isButtonEnabled}
          activeOpacity={0.8}
        >
          <Typography style={{
            ...styles.continueButtonText,
            ...(isButtonEnabled ? {} : styles.continueButtonTextDisabled)
          }}>
            Build My Profile
          </Typography>
        </TouchableOpacity>

        <View style={styles.termsContainer}>
          <Typography style={styles.termsText}>
            By continuing, you agree to Digitizers's{' '}
            <Typography style={styles.termsLink}>Privacy Policy</Typography>
            {' '}and{' '}
            <Typography style={styles.termsLink}>Terms & Conditions</Typography>
          </Typography>
        </View>

        <View style={styles.bottomIndicator} />
      </View>

      <CountryPicker
        countryCode={'US'}
        withFilter
        withFlag
        withCountryNameButton
        withAlphaFilter
        withCallingCode
        onSelect={handleCountrySelect}
        visible={showCountryPicker}
        onClose={() => setShowCountryPicker(false)}
        theme={{
          backgroundColor: '#1C1C1E',
          onBackgroundTextColor: '#FFFFFF',
          fontSize: 16,
          filterPlaceholderTextColor: 'rgba(255, 255, 255, 0.5)',
          activeOpacity: 0.7,
        }}
      /> */}
    </View>
  );
}