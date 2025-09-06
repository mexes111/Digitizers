import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar, TextInput, ScrollView, Image} from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';
import { CurvedLineBackground } from '../../components/layout/CurvedLineBackground';
import { BackButton } from '../../components/buttons/BackButton';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
// import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import { LanguageSelector } from '../../components/inputs/LanguageSelector';
import { AgeSelector } from '../../components/inputs/AgeSelector';
import { ExperienceSelector } from '../../components/inputs/ExperienceSelector';
import { useTheme } from '../../theme/ThemeProvider';

interface ProfProfileSetupProps {
  navigation?: any;
}

// Update the form data interface to handle languages as array
interface FormData {
  fullName: string;
  country: string;
  languages: string[];
  age: string;
  experienceLevel: string;
}

export default function ProfProfileSetup({ navigation }: ProfProfileSetupProps) {
  const nav = useNavigation();
  const { theme } = useTheme();
  
  // Update the initial form data
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    country: '',
    languages: [],
    age: '',
    experienceLevel: '',
  });
  
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleContinue = () => {
    if (formData.fullName.trim()) {
      (navigation || nav).navigate('CompanyInformationScreen');
    }
  };

  const handleBack = () => {
    (navigation || nav).goBack();
  };

  // Update the updateFormData function to handle both string and array values
  const updateFormData = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    updateFormData('country', country.name);
    setShowCountryPicker(false);
  };

  const styles = StyleSheet.create({
    icon: {height: 20, width: 20},
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
    scrollContainer: {
      flex: 1,
      zIndex: 10,
    },
    content: {
      paddingHorizontal: 14,
    },
    profileImageContainer: {
      marginBottom: 10,
    },
    profileImageWrapper: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    cameraIcon: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: theme.colors.textPrimary,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 3,
      borderColor: theme.colors.background,
    },
    headerText: {
      fontSize: 24,
      fontWeight: '800',
      color: theme.colors.textPrimary,
      lineHeight: 32,
    },
    subHeaderText: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      marginBottom: 20,
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
      borderColor: `${theme.colors.textPrimary}33`,
      borderRadius: 16,
      paddingHorizontal: 20,
      paddingVertical: 18,
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: 56,
    },
    inputWrapperFocused: {
      borderColor: theme.colors.primary,
      backgroundColor: `${theme.colors.primary}1A`,
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
      color: theme.colors.textPrimary,
      fontWeight: '500',
    },
    termsContainer: {
      paddingHorizontal: 24,
      alignItems: 'center',
      marginBottom: 40,
    },
    termsText: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: 20,
    },
    termsLink: {
      color: theme.colors.textPrimary,
      fontWeight: '600',
    },
    bottomIndicator: {
      width: 134,
      height: 5,
      backgroundColor: theme.colors.textPrimary,
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
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      
      <View style={styles.backgroundContainer}>
        <CurvedLineBackground/>
        
        <View style={styles.header}>
         <BackButton onPress={handleBack}/>
        </View>

        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.profileImageContainer}>
              <Image style={{height: 90, width: 90}} source={require('../../assets/profile.png')}/>
            </View>

            <Typography style={styles.headerText}>
             Complete your profile
            </Typography>
            <Typography style={styles.subHeaderText}>
              Build trust with talent by completing your professional profile
            </Typography>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <View style={[
                  styles.inputWrapper,
                  formData.fullName ? styles.inputWrapperFocused : null
                ]}>
                  <View style={styles.iconContainer}>
                    <Image style={{height: 20, width: 20}} source={require('../../assets/user.png')}/>
                  </View>
                  <TextInput
                    style={styles.textInput}
                    placeholder="First and last name"
                    placeholderTextColor={`${theme.colors.textPrimary}80`}
                    value={formData.fullName}
                    onChangeText={(text) => updateFormData('fullName', text)}
                    autoCapitalize="words"
                    autoComplete="name"
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <LanguageSelector
                  value={formData.languages}
                  onSelect={(languages) => updateFormData('languages', languages)}
                  placeholder="Job Title (E.g Senior A&R)"
                />
              </View>

              <View style={styles.inputContainer}>
                <TouchableOpacity 
                  style={styles.inputWrapper}
                  onPress={() => setShowCountryPicker(true)}
                >
                  <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../../assets/NG.png')}/>
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
                    <Image style={styles.icon} source={require('../../assets/chevron-down.png')}/>
                  </View>
                </TouchableOpacity>
              </View>

            
            </View>
          </View>
        </ScrollView>

        <PrimaryButton
          title="Build My Profile"
          onPress={handleContinue}
          disabled={!isButtonEnabled}
          style={{
            marginHorizontal: 24,
            marginBottom: 20,
          }}
        />

        <View style={styles.termsContainer}>
          <Typography style={styles.termsText}>
            By continuing, you agree to Digitizers's{' '}
            <Typography style={styles.termsLink}>Privacy Policy</Typography>
            {' '}and{' '}
            <Typography style={styles.termsLink}>Terms & Conditions</Typography>
          </Typography>
        </View>

        {/* <View style={styles.bottomIndicator} /> */}
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
          backgroundColor: theme.colors.surface,
          onBackgroundTextColor: theme.colors.textPrimary,
          fontSize: 16,
          filterPlaceholderTextColor: `${theme.colors.textPrimary}80`,
          activeOpacity: 0.7,
        }}
      />
    </View>
  );
}