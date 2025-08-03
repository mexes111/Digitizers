import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Typography } from '../typography/Typography';

interface ExperienceSelectorProps {
  value?: string;
  onSelect: (experience: string) => void;
  placeholder?: string;
}

const EXPERIENCE_LEVELS = [
  'Beginner (0-1 years)',
  'Intermediate (2-4 years)',
  'Advanced (5-7 years)',
  'Expert (8+ years)'
];

export const ExperienceSelector: React.FC<ExperienceSelectorProps> = ({
  value,
  onSelect,
  placeholder = 'Experience Level'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSelect = (experience: string) => {
    onSelect(experience);
    setIsVisible(false);
  };

  return (
    <View>
      <TouchableOpacity style={styles.inputWrapper} onPress={() => setIsVisible(true)}>
        <View style={styles.iconContainer} />
        <Typography style={{
          ...styles.textInput,
          opacity: value ? 1 : 0.5
        }}>
          {value || placeholder}
        </Typography>
      </TouchableOpacity>

      <Modal visible={isVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Typography style={styles.modalTitle}>Select Experience Level</Typography>
              <TouchableOpacity onPress={() => setIsVisible(false)}>
                <Typography style={styles.closeButton}>✕</Typography>
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={EXPERIENCE_LEVELS}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.experienceItem}
                  onPress={() => handleSelect(item)}
                >
                  <Typography style={styles.experienceText}>{item}</Typography>
                  {value === item && (
                    <Typography style={styles.checkmark}>✓</Typography>
                  )}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#1C1C1E',
    borderRadius: 20,
    width: '80%',
    maxHeight: '60%',
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
  closeButton: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  experienceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  experienceText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  checkmark: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});