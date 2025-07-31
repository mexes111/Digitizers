import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/Onboarding/SplashScreen';
import WelcomeCarousel from '../screens/Onboarding/WelcomeCarousel';
import UserTypeSelection from '../screens/Onboarding/UserTypeSelection';
import RegistrationOptions from '../screens/Onboarding/RegistrationOptions';
import EmailSignupForm from '../screens/Onboarding/EmailSignupForm';
import CategorySelect from '../screens/Onboarding/CreativeSetup/CategorySelect';
import BasicInfoForm from '../screens/Onboarding/CreativeSetup/BasicInfoForm';

export type RootStackParamList = {
  SplashScreen: undefined;
  WelcomeCarousel: undefined;
  UserTypeSelection: undefined;
  RegistrationOptions: undefined;
  EmailSignupForm: undefined;
  CategorySelect: undefined;
  BasicInfoForm: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="WelcomeCarousel" component={WelcomeCarousel} />
      <Stack.Screen name="UserTypeSelection" component={UserTypeSelection} />
      <Stack.Screen name="RegistrationOptions" component={RegistrationOptions} />
      <Stack.Screen name="EmailSignupForm" component={EmailSignupForm} />
      <Stack.Screen name="CategorySelect" component={CategorySelect} />
      <Stack.Screen name="BasicInfoForm" component={BasicInfoForm} />
    </Stack.Navigator>
  );
}
