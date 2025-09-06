import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, FlatList, TextInput, StyleSheet } from 'react-native';
import { Typography } from '../typography/Typography';

interface Country {
  code: string;
  name: string;
  flag: string;
  callingCode: string;
}

interface SimpleCountryPickerProps {
  selectedCountry: Country;
  onCountrySelect: (country: Country) => void;
}

const countries: Country[] = [
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬', callingCode: '+234' },
  { code: 'US', name: 'United States', flag: '🇺🇸', callingCode: '+1' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', callingCode: '+44' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', callingCode: '+1' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', callingCode: '+61' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', callingCode: '+49' },
  { code: 'FR', name: 'France', flag: '🇫🇷', callingCode: '+33' },
  { code: 'IN', name: 'India', flag: '🇮🇳', callingCode: '+91' },
  { code: 'CN', name: 'China', flag: '🇨🇳', callingCode: '+86' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', callingCode: '+81' },
];

export const SimpleCountryPicker: React.FC<SimpleCountryPickerProps> = ({
  selectedCountry,
  onCountrySelect,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchText.toLowerCase()) ||
    country.callingCode.includes(searchText)
  );

  const handleCountrySelect = (country: Country) => {
    onCountrySelect(country);
    setModalVisible(false);
    setSearchText('');
  };

  const styles = StyleSheet.create({
    pickerButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: '#000000',
    },
    modalHeader: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#38383A',
    },
    searchInput: {
      backgroundColor: '#1C1C1E',
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
      color: '#FFFFFF',
      marginTop: 10,
    },
    countryItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#38383A',
    },
    flagText: {
      fontSize: 24,
      marginRight: 12,
    },
    countryInfo: {
      flex: 1,
    },
    closeButton: {
      alignSelf: 'flex-end',
      padding: 10,
    },
  });

  return (
    <>
      <TouchableOpacity style={styles.pickerButton} onPress={() => setModalVisible(true)}>
        <Typography variant="body" style={{ fontSize: 20, marginRight: 4 }}>
          {selectedCountry.flag}
        </Typography>
        <Typography variant="body" style={{ color: '#FFFFFF', fontSize: 16 }}>
          {selectedCountry.callingCode}
        </Typography>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Typography variant="body" style={{ color: '#007AFF' }}>Done</Typography>
            </TouchableOpacity>
            <Typography variant="heading" style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
              Select Country
            </Typography>
            <TextInput
              style={styles.searchInput}
              placeholder="Search countries..."
              placeholderTextColor="#8E8E93"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          
          <FlatList
            data={filteredCountries}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.countryItem}
                onPress={() => handleCountrySelect(item)}
              >
                <Typography variant="body" style={styles.flagText}>
                  {item.flag}
                </Typography>
                <View style={styles.countryInfo}>
                  <Typography variant="body" style={{ color: '#FFFFFF' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="caption" style={{ color: '#8E8E93' }}>
                    {item.callingCode}
                  </Typography>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </>
  );
};