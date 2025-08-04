import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';
import { ScreenContainer } from '../../components/layout/ScreenContainer';
import { ScreenHeader } from '../../components/layout/ScreenHeader';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { FormInputField } from '../../components/inputs/FormInputField';
import { DropdownField } from '../../components/inputs/DropdownField';
import { ScreenHeaderProgress } from '../../components/layout/ScreenHeaderProgress';
import { useTheme } from '../../theme/ThemeProvider';

interface CompanyInformationScreenProps {
  navigation?: any;
}

export default function CompanyInformationScreen({ navigation }: CompanyInformationScreenProps) {
  const nav = useNavigation();
  const {theme} = useTheme()
  const [companyName, setCompanyName] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [location, setLocation] = useState('');

  const companyTypes = [
    'Record Label',
    'Management Company',
    'Talent Agency',
    'Music Publisher',
    'Production Company',
    'Marketing Agency',
    'Brand/Corporation',
    'Media Company',
    'Technology Company',
    'Other',
  ];

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees',
  ];

  const handleContinue = () => {
    if (isFormValid()) {
      (navigation || nav).navigate('IdentityVerificationScreen');
    }
  };

  const handleBack = () => {
    (navigation || nav).goBack();
  };

  const isFormValid = () => {
    return companyName.trim() && companyType && companySize && location.trim();
  };

  const showCompanyTypeSelector = () => {
    Alert.alert(
      'Select Company Type',
      '',
      companyTypes.map(type => ({
        text: type,
        onPress: () => setCompanyType(type),
      })).concat([{ text: 'Cancel', style: 'cancel' }])
    );
  };

  const showCompanySizeSelector = () => {
    Alert.alert(
      'Select Company Size',
      '',
      companySizes.map(size => ({
        text: size,
        onPress: () => setCompanySize(size),
      })).concat([{ text: 'Cancel', style: 'cancel' }])
    );
  };

  const LocationIcon = () => (
    <View style={styles.iconContainer}>
      <Typography style={styles.iconText}>📍</Typography>
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
    formContainer: {
      paddingBottom: 20,
      paddingTop: 20
    },
    fieldLabel: {
      fontSize: 16,
      color: theme.colors.textSecondary,
      marginBottom: 4,
    },
    fieldContainer: {
    //   marginBottom: 4,
    },
    iconContainer: {
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconText: {
      fontSize: 16,
    },
    buttonContainer: {
      paddingTop: 20,
      paddingBottom: 60,
    },
  });

  return (
    <ScreenContainer showCurvedLine={true}>
      <ScreenHeaderProgress
        currentStep={2}
        totalSteps={3}
        title="Company Information"
        subtitle="Help talent understand your organization"
        onBackPress={handleBack}
      />

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <View style={styles.fieldContainer}>
            <Typography style={styles.fieldLabel}>Company/Organization Name</Typography>
            <FormInputField
              value={companyName}
              onChangeText={setCompanyName}
              placeholder="Enter company name"
              autoComplete="organization"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Typography style={styles.fieldLabel}>Company Type</Typography>
            <DropdownField
              value={companyType}
              placeholder="Select Company Type"
              onPress={showCompanyTypeSelector}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Typography style={styles.fieldLabel}>Company Size</Typography>
            <DropdownField
              value={companySize}
              placeholder="Select Company Size"
              onPress={showCompanySizeSelector}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Typography style={styles.fieldLabel}>Company Location</Typography>
            <FormInputField
              value={location}
              onChangeText={setLocation}
              placeholder="City, Country"
              icon={<LocationIcon />}
              autoComplete="address-line1"
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Save Company Info"
          onPress={handleContinue}
          disabled={!isFormValid()}
        />
      </View>
    </ScreenContainer>
  );
}