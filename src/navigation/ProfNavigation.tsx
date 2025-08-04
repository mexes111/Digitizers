import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/Onboarding/SplashScreen';
import WelcomeCarousel from '../screens/Onboarding/WelcomeCarousel';
import UserTypeSelection from '../screens/Onboarding/UserTypeSelection';
import SignIn from '../screens/Onboarding/SignIn';
// Industry Professional specific screens
import ProfEmailSignupForm from '../screens/industryProfessional/EmailSignupForm';
import ProfProfileSetup from '../screens/industryProfessional/ProfileSetup';
import ProfProfileSuccess from '../screens/industryProfessional/ProfileSuccess';
import ProfSubscription from '../screens/industryProfessional/Subscription';
import { ProfEnterPhoneScreen } from '../screens/industryProfessional/EnterPhoneScreen';
import { ProfVerifyOTPScreen } from '../screens/industryProfessional/VerifyOTPScreen';

export type ProfStackParamList = {
  SplashScreen: undefined;
  WelcomeCarousel: undefined;
  UserTypeSelection: undefined;
  RegistrationOptions: undefined;
  ProfEmailSignupForm: undefined;
  ProfProfileSetup: undefined;
  ProfProfileSuccess: undefined;
  ProfSubscription: undefined;
  ProfEnterPhone: undefined;
  ProfVerifyOTP: undefined;
  SignIn: undefined;
};

const Stack = createStackNavigator<ProfStackParamList>();

export default function ProfNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="WelcomeCarousel" component={WelcomeCarousel} />
      <Stack.Screen name="UserTypeSelection" component={UserTypeSelection} />
      <Stack.Screen name="ProfEmailSignupForm" component={ProfEmailSignupForm} />
      <Stack.Screen name="ProfProfileSetup" component={ProfProfileSetup} />
      <Stack.Screen name="ProfProfileSuccess" component={ProfProfileSuccess} />
      <Stack.Screen name="ProfSubscription" component={ProfSubscription} />
      <Stack.Screen name="ProfEnterPhone" component={ProfEnterPhoneScreen} />
      <Stack.Screen name="ProfVerifyOTP" component={ProfVerifyOTPScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
