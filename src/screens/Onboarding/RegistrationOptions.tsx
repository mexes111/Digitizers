import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function RegistrationOptions({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Your Account</Text>
      <Button title="Continue with Google" onPress={() => {}} />
      <Button title="Continue with Facebook" onPress={() => {}} />
      <Button title="Continue with Instagram" onPress={() => {}} />
      <Text style={styles.divider}>OR</Text>
      <Button title="Sign up with Email" onPress={() => navigation.navigate('EmailSignupForm')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: '600', marginBottom: 20 },
  divider: { textAlign: 'center', marginVertical: 15, color: '#999' },
});
