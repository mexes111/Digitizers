import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function EmailSignupForm({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  return (
    <View style={styles.container}>
      <TextInput placeholder="Full Name" style={styles.input} onChangeText={setName} value={name} />
      <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} onChangeText={setEmail} value={email} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} onChangeText={setPass} value={pass} />
      <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} onChangeText={setConfirmPass} value={confirmPass} />
      <Button title="Create Account" onPress={() => navigation.navigate('CategorySelect')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, borderRadius: 6, padding: 10 },
});
