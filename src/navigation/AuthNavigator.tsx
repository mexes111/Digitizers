import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/Onboarding/SplashScreen';
import WelcomeCarousel from '../screens/Onboarding/WelcomeCarousel';
import UserTypeSelection from '../screens/Onboarding/UserTypeSelection';
import RegistrationOptions from '../screens/Onboarding/RegistrationOptions';
import EmailSignupForm from '../screens/Onboarding/EmailSignupForm';
import ProfileSetup from '../screens/Onboarding/ProfileSetup';
import UploadWork from '../screens/Onboarding/UploadWork';
import SocialMediaLinks from '../screens/Onboarding/SocialMediaLinks';
import ProfileSuccess from '../screens/Onboarding/ProfileSuccess';
import CreatorCardScreen from '../screens/Onboarding/CreatorCardScreen';
import OnboardingComplete from '../screens/Onboarding/OnboardingComplete';
import Subscription from '../screens/Onboarding/Subscription';
import { EnterPhoneScreen } from '../screens/Auth/EnterPhoneScreen';
import { VerifyOTPScreen } from '../screens/Auth/VerifyOTPScreen';
import CreativeCategorySelection from '../screens/Onboarding/CreativeCategorySelection';
import BuildPortfolio from '../screens/Onboarding/BuildPortfolio';
import StyleSelection from '../screens/Onboarding/StyleSelection';
import UploadPhoto from '../screens/Onboarding/UploadPhoto';
import TellYourStory from '../screens/Onboarding/TellYourStory';
import AddYourTrack from '../screens/Onboarding/AddYourTrack';
import AddYourVideo from '../screens/Onboarding/AddYourVideo';

export type RootStackParamList = {
  SplashScreen: undefined;
  WelcomeCarousel: undefined;
  UserTypeSelection: undefined;
  RegistrationOptions: undefined;
  EmailSignupForm: undefined;
  ProfileSetup: undefined;
  UploadWork: undefined;
  SocialMediaLinks: undefined;
  ProfileSuccess: undefined;
  CreatorCard: undefined;
  OnboardingComplete: undefined;
  Subscription: undefined;
  EnterPhone: undefined;
  VerifyOTP: undefined;
  SignIn: undefined;
  MainApp: undefined;
  CreativeCategorySelection: undefined;
  BuildPortfolio: undefined;
  StyleSelection: undefined;
  UploadPhoto: undefined;
  TellYourStory: undefined;
  AddYourTrack: undefined;
  AddYourVideo: undefined

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
      <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
      <Stack.Screen name="UploadWork" component={UploadWork} />
      <Stack.Screen name="SocialMediaLinks" component={SocialMediaLinks} />
      <Stack.Screen name="ProfileSuccess" component={ProfileSuccess} />
      <Stack.Screen name="CreatorCard" component={CreatorCardScreen} />
      <Stack.Screen name="OnboardingComplete" component={OnboardingComplete} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="EnterPhone" component={EnterPhoneScreen} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTPScreen} />
      <Stack.Screen name="CreativeCategorySelection" component={CreativeCategorySelection} />
      <Stack.Screen name="BuildPortfolio" component={BuildPortfolio} />
      <Stack.Screen name="StyleSelection" component={StyleSelection} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
      <Stack.Screen name="TellYourStory" component={TellYourStory} />
      <Stack.Screen name="AddYourTrack" component={AddYourTrack} />
      <Stack.Screen name="AddYourVideo" component={AddYourVideo} />
    </Stack.Navigator>
  );
}
