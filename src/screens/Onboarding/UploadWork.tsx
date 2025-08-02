import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';

interface UploadWorkProps {
  navigation?: any;
}

export default function UploadWork({ navigation }: UploadWorkProps) {
  const nav = useNavigation();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const uploadOptions = [
    {
      id: 'photos',
      title: 'Upload Photos',
      description: 'Showcase your visual work and style',
      icon: '📷',
    },
    {
      id: 'videos',
      title: 'Upload Videos',
      description: 'Share performances, behind the scenes, reels etc',
      icon: '🎥',
    },
    {
      id: 'music',
      title: 'Upload Music',
      description: 'Let your tracks speak for themselves',
      icon: '🎵',
    },
  ];

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleContinue = () => {
    // Navigate to next screen or complete onboarding
    (navigation || nav).navigate('MainApp');
  };

  const handleBack = () => {
    (navigation || nav).goBack();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0A0A0A',
    },
    header: {
      paddingTop: 60,
      paddingHorizontal: 24,
      paddingBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    backButton: {
      width: 44,
      height: 44,
      borderRadius: 12,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backIcon: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: '600',
    },
    progressContainer: {
      flex: 1,
      alignItems: 'center',
    },
    progressBar: {
      width: 200,
      height: 4,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 2,
      overflow: 'hidden',
    },
    progressFill: {
      width: '33%',
      height: '100%',
      backgroundColor: '#007AFF',
      borderRadius: 2,
    },
    progressText: {
      fontSize: 14,
      color: '#007AFF',
      fontWeight: '600',
      marginTop: 8,
    },
    content: {
      flex: 1,
      paddingHorizontal: 24,
    },
    headerText: {
      fontSize: 32,
      fontWeight: '800',
      color: '#FFFFFF',
      marginBottom: 12,
      lineHeight: 40,
    },
    subHeaderText: {
      fontSize: 16,
      color: '#A8A8A8',
      marginBottom: 48,
      lineHeight: 24,
    },
    optionsContainer: {
      marginBottom: 60,
    },
    optionCard: {
      borderRadius: 16,
      borderWidth: 2,
      padding: 24,
      marginBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 80,
    },
    selectedCard: {
      borderColor: '#007AFF',
      backgroundColor: 'rgba(0, 122, 255, 0.1)',
    },
    unselectedCard: {
      borderColor: 'rgba(255, 255, 255, 0.2)',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
    optionLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    optionIcon: {
      fontSize: 32,
      marginRight: 20,
    },
    optionContent: {
      flex: 1,
    },
    optionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: 6,
    },
    optionDescription: {
      fontSize: 14,
      color: '#A8A8A8',
      lineHeight: 20,
    },
    addButton: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 16,
    },
    addButtonSelected: {
      backgroundColor: '#007AFF',
    },
    addIcon: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: '600',
    },
    continueButton: {
      backgroundColor: '#007AFF',
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
      shadowColor: '#007AFF',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 8,
    },
    continueButtonText: {
      fontSize: 18,
      fontWeight: '700',
      color: '#FFFFFF',
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Typography style={styles.backIcon}>←</Typography>
        </TouchableOpacity>
        
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
          <Typography style={styles.progressText}>1/3</Typography>
        </View>
        
        <View style={{ width: 44 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Typography style={styles.headerText}>
          Upload Your Work
        </Typography>
        <Typography style={styles.subHeaderText}>
          Start with any media type. You can always add more later.
        </Typography>

        <View style={styles.optionsContainer}>
          {uploadOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionCard,
                selectedOptions.includes(option.id) ? styles.selectedCard : styles.unselectedCard,
              ]}
              onPress={() => handleOptionToggle(option.id)}
            >
              <View style={styles.optionLeft}>
                <Typography style={styles.optionIcon}>
                  {option.icon}
                </Typography>
                <View style={styles.optionContent}>
                  <Typography style={styles.optionTitle}>
                    {option.title}
                  </Typography>
                  <Typography style={styles.optionDescription}>
                    {option.description}
                  </Typography>
                </View>
              </View>
              <View style={[
                styles.addButton,
                selectedOptions.includes(option.id) && styles.addButtonSelected,
              ]}>
                <Typography style={styles.addIcon}>
                  {selectedOptions.includes(option.id) ? '✓' : '+'}
                </Typography>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
          activeOpacity={0.8}
        >
          <Typography style={styles.continueButtonText}>
            Tell Your Story
          </Typography>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}