import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Typography } from '../typography/Typography';

interface LanguageSelectorProps {
  value?: string[];
  onSelect: (languages: string[]) => void;
  placeholder?: string;
}

const LANGUAGES = [
  'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 
  'Russian', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Hindi',
  'Dutch', 'Swedish', 'Norwegian', 'Danish', 'Finnish', 'Polish'
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  value = [],
  onSelect,
  placeholder = 'Select Languages you speak'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(value);

  const toggleLanguage = (language: string) => {
    const updatedLanguages = selectedLanguages.includes(language)
      ? selectedLanguages.filter(lang => lang !== language)
      : [...selectedLanguages, language];
    
    setSelectedLanguages(updatedLanguages);
  };

  const handleDone = () => {
    onSelect(selectedLanguages);
    setIsVisible(false);
  };

  const displayText = selectedLanguages.length > 0 
    ? selectedLanguages.join(', ') 
    : placeholder;

  return (
    <View>
      <TouchableOpacity style={styles.inputWrapper} onPress={() => setIsVisible(true)}>
        <View style={styles.iconContainer} />
        <Typography style={{
          ...styles.textInput,
          opacity: selectedLanguages.length > 0 ? 1 : 0.5
        }}>
          {displayText}
        </Typography>
      </TouchableOpacity>

      <Modal visible={isVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Typography style={styles.modalTitle}>Select Languages</Typography>
              <TouchableOpacity onPress={handleDone}>
                <Typography style={styles.doneButton}>Done</Typography>
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={LANGUAGES}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.languageItem}
                  onPress={() => toggleLanguage(item)}
                >
                  <Typography style={styles.languageText}>{item}</Typography>
                  <View style={[
                    styles.checkbox,
                    selectedLanguages.includes(item) && styles.checkboxSelected
                  ]}>
                    {selectedLanguages.includes(item) && (
                      <Typography style={styles.checkmark}>✓</Typography>
                    )}
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    // backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56,
  },
  iconContainer: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#1C1C1E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  doneButton: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  languageText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});