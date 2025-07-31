import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.replace('WelcomeCarousel'), 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Digitizers</Text>
      <Text style={styles.tagline}>Where Talents Get Discovered</Text>
      <ActivityIndicator size="large" color="#FF6B35" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { fontSize: 32, fontWeight: 'bold', color: '#FF6B35' },
  tagline: { fontSize: 16, color: '#7F8C8D', marginBottom: 20 },
});
