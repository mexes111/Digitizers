import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/Onboarding/SplashScreen';
import WelcomeCarousel from '../screens/Onboarding/WelcomeCarousel';
import UserTypeSelection from '../screens/Onboarding/UserTypeSelection';
import SignIn from '../screens/Onboarding/SignIn';
// Industry Professional specific screens
import ProfEmailSignupForm from '../screens/industryProfessional/EmailSignupForm';
import CreatePasswordScreen from '../screens/industryProfessional/CreatePasswordScreen';
import RoleSelectionScreen from '../screens/industryProfessional/RoleSelectionScreen';
import CompanyInformationScreen from '../screens/industryProfessional/CompanyInformationScreen';
import IdentityVerificationScreen from '../screens/industryProfessional/IdentityVerificationScreen';
import ProfProfileSetup from '../screens/industryProfessional/ProfileSetup';
import ProfProfileSuccess from '../screens/industryProfessional/ProfileSuccess';
import ProfSubscription from '../screens/industryProfessional/Subscription';
import { ProfEnterPhoneScreen } from '../screens/industryProfessional/EnterPhoneScreen';
import { ProfVerifyOTPScreen } from '../screens/industryProfessional/VerifyOTPScreen';
import CACDocUpload from '../screens/industryProfessional/CACDocUpload';
import SelfieUpload from '../screens/industryProfessional/SelfieUpload';
import DiscoverScreen from '../screens/industryProfessional/DiscoverScreen';

export type ProfStackParamList = {
  SplashScreen: undefined;
  WelcomeCarousel: undefined;
  UserTypeSelection: undefined;
  RegistrationOptions: undefined;
  ProfEmailSignupForm: undefined;
  CreatePasswordScreen: undefined;
  RoleSelectionScreen: undefined;
  CompanyInformationScreen: undefined;
  IdentityVerificationScreen: undefined;
  ProfProfileSetup: undefined;
  ProfProfileSuccess: undefined;
  ProfSubscription: undefined;
  ProfEnterPhone: undefined;
  ProfVerifyOTP: undefined;
  SignIn: undefined;
  CACDocUpload: undefined;
  SelfieUpload: undefined;
  DiscoverScreen: undefined;
};

const Stack = createStackNavigator<ProfStackParamList>();

export default function ProfNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="WelcomeCarousel" component={WelcomeCarousel} />
      <Stack.Screen name="UserTypeSelection" component={UserTypeSelection} />
      <Stack.Screen name="ProfEmailSignupForm" component={ProfEmailSignupForm} />
      <Stack.Screen name="CreatePasswordScreen" component={CreatePasswordScreen} />
      <Stack.Screen name="RoleSelectionScreen" component={RoleSelectionScreen} />
      <Stack.Screen name="CompanyInformationScreen" component={CompanyInformationScreen} />
      <Stack.Screen name="IdentityVerificationScreen" component={IdentityVerificationScreen} />
      <Stack.Screen name="ProfProfileSetup" component={ProfProfileSetup} />
      <Stack.Screen name="ProfProfileSuccess" component={ProfProfileSuccess} />
      <Stack.Screen name="ProfSubscription" component={ProfSubscription} />
      <Stack.Screen name="ProfEnterPhone" component={ProfEnterPhoneScreen} />
      <Stack.Screen name="ProfVerifyOTP" component={ProfVerifyOTPScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="CACDocUpload" component={CACDocUpload} />
      <Stack.Screen name="SelfieUpload" component={SelfieUpload} />
      <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
    </Stack.Navigator>
  );
}
