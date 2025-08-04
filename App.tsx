import React from 'react';
import { View, StyleSheet } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';
// import { useFonts } from '@expo-google-fonts/public-sans';
// import {
//   PublicSans_300Light,
//   PublicSans_400Regular,
//   PublicSans_500Medium,
//   PublicSans_600SemiBold,
//   PublicSans_700Bold,
// } from '@expo-google-fonts/public-sans';
import Navigation from './src/navigation';
import { ThemeProvider } from './src/theme/ThemeProvider';

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   PublicSans_300Light,
  //   PublicSans_400Regular,
  //   PublicSans_500Medium,
  //   PublicSans_600SemiBold,
  //   PublicSans_700Bold,
  // });

  // React.useEffect(() => {
  //   if (fontsLoaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}
