import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function BasicInfoForm() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic Info Form (To be implemented)</Text>
      <Button title="Save & Continue" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
