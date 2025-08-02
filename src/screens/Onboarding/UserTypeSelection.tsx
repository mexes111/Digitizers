import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';

interface UserTypeSelectionProps {
  navigation?: any;
}

export const UserTypeSelection: React.FC<UserTypeSelectionProps> = ({ navigation }) => {
  const nav = useNavigation();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedType) {
      (navigation || nav).navigate('RegistrationOptions');
    }
  };

  const handleBack = () => {
    (navigation || nav).goBack();
  };

  const userTypes = [
    {
      id: 'creative',
      title: 'Creative Talent',
      description: 'Musicians, Models, Photographer, Streamer, Content Creators etc',
    },
    {
      id: 'industry',
      title: 'Industry Professional',
      description: 'A&Rs, Manager, Brand, Agency, etc',
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0A0A0A',
    },
    backgroundContainer: {
      flex: 1,
      position: 'relative',
    },
    curvedLine: {
      position: 'absolute',
      top: -150,
      right: -180,
      width: 300,
      height: 300,
      borderRadius: 150,
      borderWidth: 2,
      borderColor: 'rgba(0, 200, 255, 0.2)',
      borderStyle: 'solid',
    },
    content: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 60,
      zIndex: 10,
    },
    backButton: {
      width: 44,
      height: 44,
      borderRadius: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
    },
    backButtonText: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: '600',
    },
    headerContainer: {
      // alignItems: 'center',
      marginBottom: 30,
    },
    iconContainer: {
      marginBottom: 14,
    },
    userTypeIcon: {
      width: 80,
      height: 80,
      resizeMode: 'contain',
    },
    headerText: {
      fontSize: 32,
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: 12,
      lineHeight: 40,
    },
    subHeaderText: {
      fontSize: 16,
      color: '#A8A8A8',
      lineHeight: 24,
      // textAlign: 'center',
    },
    optionsContainer: {
      marginBottom: 20,
    },
    optionCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      position: 'relative',
    },
    optionCardSelected: {
      borderColor: '#007AFF',
      backgroundColor: 'rgba(0, 122, 255, 0.1)',
    },
    optionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#FFFFFF',
      marginBottom: 8,
    },
    optionDescription: {
      fontSize: 14,
      color: '#A8A8A8',
      lineHeight: 20,
    },
    radioButton: {
      position: 'absolute',
      top: 20,
      right: 20,
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'rgba(255, 255, 255, 0.3)',
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    radioButtonSelected: {
      borderColor: '#007AFF',
      backgroundColor: '#007AFF',
    },
    radioButtonInner: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#FFFFFF',
    },
    continueButton: {
      backgroundColor: '#007AFF',
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 'auto',
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
    continueButtonDisabled: {
      backgroundColor: 'rgba(0, 122, 255, 0.3)',
      shadowOpacity: 0,
      elevation: 0,
    },
    continueButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    signInContainer: {
      alignItems: 'center',
      marginBottom: 40,
    },
    signInText: {
      fontSize: 16,
      color: '#A8A8A8',
    },
    signInLink: {
      color: '#007AFF',
      fontWeight: '500',
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" />
      
      <View style={styles.backgroundContainer}>
        {/* Background decorative elements */}
        <View style={styles.curvedLine} />
        
        <View style={styles.content}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Typography style={styles.backButtonText}>‹</Typography>
          </TouchableOpacity>
          
          <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
              <Image 
                source={require('../../assets/usertype.png')} 
                style={styles.userTypeIcon}
              />
            </View>
            <Typography style={styles.headerText}>
              I am a...
            </Typography>
            <Typography style={styles.subHeaderText}>
              Choose your profile type to get started
            </Typography>
          </View>

          <View style={styles.optionsContainer}>
            {userTypes.map((type) => (
              <TouchableOpacity
                key={type.id}
                style={[
                  styles.optionCard,
                  selectedType === type.id && styles.optionCardSelected
                ]}
                onPress={() => setSelectedType(type.id)}
                activeOpacity={0.8}
              >
                <Typography style={styles.optionTitle}>
                  {type.title}
                </Typography>
                <Typography style={styles.optionDescription}>
                  {type.description}
                </Typography>
                
                <View style={[
                  styles.radioButton,
                  selectedType === type.id && styles.radioButtonSelected
                ]}>
                  {selectedType === type.id && (
                    <View style={styles.radioButtonInner} />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={[
              styles.continueButton,
              !selectedType && styles.continueButtonDisabled
            ]}
            onPress={handleContinue}
            disabled={!selectedType}
            activeOpacity={0.8}
          >
            <Typography style={styles.continueButtonText}>
              Continue
            </Typography>
          </TouchableOpacity>

          <View style={styles.signInContainer}>
            <Typography style={styles.signInText}>
              Already have an account? <Typography style={styles.signInLink}>Sign In</Typography>
            </Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserTypeSelection;
