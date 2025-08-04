import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';
import { ScreenContainer } from '../../components/layout/ScreenContainer';
import { ScreenHeader } from '../../components/layout/ScreenHeader';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { FormInputField } from '../../components/inputs/FormInputField';

interface CreatePasswordScreenProps {
  navigation?: any;
}

export default function CreatePasswordScreen({ navigation }: CreatePasswordScreenProps) {
  const nav = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleContinue = () => {
    if (isFormValid()) {
      (navigation || nav).navigate('RoleSelectionScreen');
    }
  };

  const handleBack = () => {
    (navigation || nav).goBack();
  };

  // Password validation rules
  const hasMinLength = password.length >= 8;
  const hasUpperAndLower = /(?=.*[a-z])(?=.*[A-Z])/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const passwordsMatch = password === confirmPassword && password.length > 0;

  const isFormValid = () => {
    return hasMinLength && hasUpperAndLower && hasNumber && hasSymbol && passwordsMatch;
  };

  const ValidationItem = ({ isValid, text }: { isValid: boolean; text: string }) => (
    <View style={styles.validationItem}>
      <View style={[styles.checkIcon, isValid && styles.checkIconValid]}>
        <Typography style={[styles.checkText, isValid && styles.checkTextValid]}>
          ✓
        </Typography>
      </View>
      <Typography style={[styles.validationText, isValid && styles.validationTextValid]}>
        {text}
      </Typography>
    </View>
  );

  const EyeIcon = ({ onPress, show }: { onPress: () => void; show: boolean }) => (
    <TouchableOpacity onPress={onPress} style={styles.eyeIcon}>
      <Typography style={styles.eyeIconText}>
        {show ? '👁️' : '👁️‍🗨️'}
      </Typography>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    validationContainer: {
      marginTop: 20,
      marginBottom: 30,
    },
    validationItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    checkIcon: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.3)',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    checkIconValid: {
      backgroundColor: '#34C759',
      borderColor: '#34C759',
    },
    checkText: {
      fontSize: 12,
      color: 'rgba(255, 255, 255, 0.5)',
      fontWeight: 'bold',
    },
    checkTextValid: {
      color: '#FFFFFF',
    },
    validationText: {
      fontSize: 14,
      color: 'rgba(255, 255, 255, 0.7)',
    },
    validationTextValid: {
      color: '#34C759',
    },
    eyeIcon: {
      paddingVertical: 0,
      paddingRight: 8
    },
    eyeIconText: {
      fontSize: 18,
      color: 'rgba(255, 255, 255, 0.6)',
    },
    buttonContainer: {
      marginTop: 'auto',
      marginBottom: 60,
    },
  });

  return (
    <ScreenContainer 
      keyboardAvoiding={true} 
      dismissKeyboardOnTap={true}
      showCurvedLine={true}
    >
      <ScreenHeader
        title="Create your password"
        subtitle="Enter an 8-character password to help secure your account"
        onBackPress={handleBack}
      />

      <FormInputField
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry={!showPassword}
        autoComplete="new-password"
        icon={<EyeIcon onPress={() => setShowPassword(!showPassword)} show={showPassword} />}
      />

      <View style={styles.validationContainer}>
        <ValidationItem isValid={hasMinLength} text="A minimum of 8 characters." />
        <ValidationItem isValid={hasUpperAndLower} text="Lower and uppercase case letters." />
        <ValidationItem isValid={hasNumber} text="At least 1 number." />
        <ValidationItem isValid={hasSymbol} text="At least 1 symbol." />
      </View>

      <FormInputField
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm password"
        secureTextEntry={!showConfirmPassword}
        autoComplete="new-password"
        icon={<EyeIcon onPress={() => setShowConfirmPassword(!showConfirmPassword)} show={showConfirmPassword} />}
      />

      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Create Password"
          onPress={handleContinue}
          disabled={!isFormValid()}
        />
      </View>
    </ScreenContainer>
  );
}