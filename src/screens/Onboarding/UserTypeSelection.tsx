import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

export default function UserTypeSelection({ navigation }) {
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>I am a...</Text>
      <TouchableOpacity style={[styles.card, selected === 'creative' && styles.selected]} onPress={() => setSelected('creative')}>
        <Text>Creative Talent</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.card, selected === 'industry' && styles.selected]} onPress={() => setSelected('industry')}>
        <Text>Industry Professional</Text>
      </TouchableOpacity>
      <Button title="Continue" disabled={!selected} onPress={() => navigation.navigate('RegistrationOptions')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { padding: 20, borderWidth: 1, borderRadius: 8, marginBottom: 10 },
  selected: { borderColor: '#FF6B35', backgroundColor: '#FFEFE8' },
});
