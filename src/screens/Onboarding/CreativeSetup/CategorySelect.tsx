import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function CategorySelect({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What type of creative are you?</Text>
      <Button title="Continue" onPress={() => navigation.navigate('BasicInfoForm')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
