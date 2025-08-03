import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput,
} from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';
import { ScreenContainer } from '../../components/layout/ScreenContainer';
import { ScreenHeader } from '../../components/layout/ScreenHeader';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';

interface EmailSignupFormProps {
  navigation?: any;
}

export default function EmailSignupForm({ navigation }: EmailSignupFormProps) {
  const nav = useNavigation();
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleContinue = () => {
    if (email.trim() && isValidEmail(email)) {
      (navigation || nav).navigate('CreativeCategorySelection');
    }
  };

  const handleBack = () => {
    (navigation || nav).goBack();
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const styles = StyleSheet.create({
    emailInputContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 16,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      height: 64,
      marginBottom: 40,
      marginTop: 15
    },
    emailInputContainerFocused: {
      borderColor: '#007AFF',
      backgroundColor: 'rgba(0, 122, 255, 0.1)',
    },
    emailIcon: {
      fontSize: 25,
      color: '#A8A8A8',
      marginRight: 12,
    },
    emailInput: {
      flex: 1,
      fontSize: 16,
      color: '#FFFFFF',
      paddingVertical: 0,
    },
    buttonContainer: {
      marginTop: 'auto',
      marginBottom: 60,
    },
  });

  const isButtonEnabled = email.trim() && isValidEmail(email);

  return (
    <ScreenContainer 
      keyboardAvoiding={true} 
      dismissKeyboardOnTap={true}
      showCurvedLine={true}
    >
      <ScreenHeader
        title="Enter your email address"
        subtitle="We'll use this for important updates and OTP when your number isn't available"
        onBackPress={handleBack}
      />

      <View style={[
        styles.emailInputContainer,
        isFocused && styles.emailInputContainerFocused
      ]}>
        <Typography style={styles.emailIcon}>✉</Typography>
        <TextInput
          style={styles.emailInput}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email address"
          placeholderTextColor="#666666"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          autoFocus={true}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Continue"
          onPress={handleContinue}
          disabled={!isButtonEnabled}
        />
      </View>
    </ScreenContainer>
  );
}