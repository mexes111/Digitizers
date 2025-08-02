import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import { Typography } from '../typography/Typography';
import { useTheme } from '../../theme/ThemeProvider';

interface PhoneNumberInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onCountryChange?: (country: Country) => void;
  placeholder?: string;
}

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChangeText,
  onCountryChange,
  placeholder = '+234 (000) 000-0000',
}) => {
  const { theme } = useTheme();
  const [countryCode, setCountryCode] = useState<CountryCode>('NG');
  const [country, setCountry] = useState<Country>({
    cca2: 'NG',
    currency: ['NGN'],
    callingCode: ['234'],
    region: 'Africa',
    subregion: 'Western Africa',
    flag: 'flag-ng',
    name: 'Nigeria',
  });
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const handleCountrySelect = (selectedCountry: Country) => {
    setCountry(selectedCountry);
    setCountryCode(selectedCountry.cca2);
    onCountryChange?.(selectedCountry);
    setShowCountryPicker(false);
  };

  const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surfaceSecondary,
      borderRadius: theme.borderRadius.lg,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: theme.spacing.sm,
      marginBottom: theme.spacing.md,
    },
    countryPickerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing.sm,
      marginRight: theme.spacing.sm,
    },
    phoneInput: {
      flex: 1,
      fontSize: theme.fontSize.md,
      color: theme.colors.textPrimary,
      padding: theme.spacing.sm,
      minHeight: 40,
    },
    countryCodeText: {
      marginLeft: theme.spacing.xs,
    },
  });

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity 
        style={styles.countryPickerContainer}
        onPress={() => setShowCountryPicker(true)}
      >
        <CountryPicker
          countryCode={countryCode}
          withFilter
          withFlag
          withCallingCode
          withEmoji
          onSelect={handleCountrySelect}
          visible={showCountryPicker}
          onClose={() => setShowCountryPicker(false)}
        />
        <Typography 
          variant="body" 
          color="textPrimary"
          style={styles.countryCodeText}
        >
          +{country.callingCode?.[0]}
        </Typography>
      </TouchableOpacity>
      
      <TextInput
        style={styles.phoneInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#8E8E93"
        keyboardType="phone-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};