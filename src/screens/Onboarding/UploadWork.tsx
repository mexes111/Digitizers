import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';
import { ScreenContainer } from '../../components/layout/ScreenContainer';
import { BackButton } from '../../components/buttons/BackButton';
import { ProgressIndicator } from '../../components/layout/ProgressIndicator';
import { Gap } from '../../components/layout';

interface UploadWorkProps {
  navigation?: any;
}

export default function UploadWork({ navigation }: UploadWorkProps) {
  const nav = useNavigation();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const uploadOptions = [
    {
      id: 'photos',
      title: 'Upload Photos',
      description: 'Showcase your visual work and style',
      icon: '📷',
      screen: 'UploadPhoto',
    },
    {
      id: 'videos',
      title: 'Upload Videos',
      description: 'Share performances, behind the scenes, reels etc',
      icon: '🎥',
      screen: 'AddYourVideo',
    },
    {
      id: 'music',
      title: 'Upload Music',
      description: 'Let your tracks speak for themselves',
      icon: '🎵',
      screen: 'AddYourTrack',
    },
  ];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    
    // Find the selected option and navigate to its corresponding screen
    const selectedOptionData = uploadOptions.find(option => option.id === optionId);
    if (selectedOptionData) {
      // Navigate immediately after selection
      setTimeout(() => {
        (navigation || nav).navigate(selectedOptionData.screen as never);
      }, 200); // Small delay for visual feedback
    }
  };

  const handleContinue = () => {
    if (selectedOption) {
      const selectedOptionData = uploadOptions.find(option => option.id === selectedOption);
      if (selectedOptionData) {
        (navigation || nav).navigate(selectedOptionData.screen as never);
      }
    }
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
      paddingHorizontal: 4,
    },
    headerText: {
      fontSize: 24,
      fontWeight: '800',
      color: '#FFFFFF',
      marginBottom: 2,
      // lineHeight: 40,
    },
    subHeaderText: {
      fontSize: 14,
      color: '#A8A8A8',
      marginBottom: 28,
      // lineHeight: 24,
    },
    optionsContainer: {
      marginBottom: 60,
    },
    optionCard: {
      borderRadius: 10,
      borderWidth: 1,
      padding: 14,
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
      // backgroundColor: 'rgba(255, 255, 255, 0.05)',
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
      fontSize: 14,
      fontWeight: '700',
      color: '#FFFFFF',
      // marginBottom: 6,
    },
    optionDescription: {
      fontSize: 12,
      color: '#A8A8A8',
      lineHeight: 20,
    },
    addButton: {
      width: 32,
      height: 32,
      borderRadius: 16,
      // backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
      opacity: 0.5
      // fontWeight: '600',
    },
    continueButton: {
      backgroundColor: selectedOption ? '#007AFF' : 'rgba(0, 122, 255, 0.3)',
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
      shadowColor: selectedOption ? '#007AFF' : 'transparent',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: selectedOption ? 0.3 : 0,
      shadowRadius: 16,
      elevation: selectedOption ? 8 : 0,
    },
    continueButtonText: {
      fontSize: 18,
      fontWeight: '700',
      color: '#FFFFFF',
      opacity: selectedOption ? 1 : 0.6,
    },
  });

  return (
    <ScreenContainer>
      {/* <Gap direction='vertical' size='xl'/> */}
     <BackButton onPress={handleBack}/>      
           <Gap direction='vertical' size='sm'/>

     <ProgressIndicator currentStep={1} totalSteps={3} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Typography style={styles.headerText}>
          Upload Your Work
        </Typography>
        <Typography style={styles.subHeaderText}>
          Choose one option to get started. You can add more content later.
        </Typography>

        <View style={styles.optionsContainer}>
          {uploadOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionCard,
                selectedOption === option.id ? styles.selectedCard : styles.unselectedCard,
              ]}
              onPress={() => handleOptionSelect(option.id)}
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
              {/* <View style={[
                styles.addButton,
                selectedOption === option.id && styles.addButtonSelected,
              ]}>
                <Typography style={styles.addIcon}>
                  {selectedOption === option.id ? '✓' : '+'}
                </Typography>
              </View> */}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
          activeOpacity={0.8}
          disabled={!selectedOption}
        >
          <Typography style={styles.continueButtonText}>
            Continue
          </Typography>
        </TouchableOpacity>
      </ScrollView>
    </ScreenContainer>
  );
}