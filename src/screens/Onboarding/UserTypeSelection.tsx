import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { useAuthStore } from '../../stores/authStore';

interface UserTypeSelectionProps {
  navigation: any;
}

export default function UserTypeSelection({ navigation }: UserTypeSelectionProps) {
  const [selectedType, setSelectedType] = useState<string | null>('creative');
  const { setUserType, setShouldUseProfNavigator } = useAuthStore();

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

  const handleContinue = () => {
    if (selectedType) {
      // Save the user type to the store
      setUserType(selectedType as 'creative' | 'industry');
      
      // Navigate based on user type
      if (selectedType === 'creative') {
        navigation.navigate('RegistrationOptions');
      } else if (selectedType === 'industry') {
        // For industry professionals, trigger switch to ProfNavigator
        setShouldUseProfNavigator(true);
        navigation.navigate('ProfEmailSignupForm');
      }
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      paddingHorizontal: 20,
    },
    backButton: {
      width: 40,
      height: 40,
      backgroundColor: '#1C1C1E',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
      marginBottom: 20,
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
    },
    headerSection: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    iconContainer: {
      width: 80,
      height: 80,
      marginBottom: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 14,
      color: '#8E8E93',
      // textAlign: 'center',
      marginBottom: 30,
    },
    optionsContainer: {
      width: '100%',
    },
    optionCard: {
      backgroundColor: '#1C1C1E',
      borderRadius: 12,
      borderWidth: 2,
      borderColor: '#38383A',
      padding: 20,
      marginBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    optionCardSelected: {
      borderColor: '#007AFF',
      backgroundColor: '#007AFF10',
    },
    optionContent: {
      flex: 1,
    },
    optionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#FFFFFF',
      marginBottom: 4,
    },
    optionDescription: {
      fontSize: 14,
      color: '#8E8E93',
      lineHeight: 20,
    },
    radioButton: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#38383A',
      marginLeft: 16,
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
      margin: 4,
    },
    buttonContainer: {
      paddingBottom: 50,
    },
    signInContainer: {
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 60
    },
    signInText: {
      fontSize: 16,
      color: '#8E8E93',
    },
    signInLink: {
      color: '#007AFF',
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Typography variant="body" style={{ color: '#FFFFFF', fontSize: 18 }}>←</Typography>
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.headerSection}>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/usertype.png')} 
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
          </View>
          
          <Typography style={styles.title}>
            I am a...
          </Typography>
          <Typography style={styles.subtitle}>
            Choose your profile type to get started
          </Typography>

          <View style={styles.optionsContainer}>
            {userTypes.map((type) => (
              <TouchableOpacity
                key={type.id}
                style={[
                  styles.optionCard,
                  selectedType === type.id && styles.optionCardSelected,
                ]}
                onPress={() => setSelectedType(type.id)}
              >
                <View style={styles.optionContent}>
                  <Typography style={styles.optionTitle}>
                    {type.title}
                  </Typography>
                  <Typography style={styles.optionDescription}>
                    {type.description}
                  </Typography>
                </View>
                
                <View style={[
                  styles.radioButton,
                  selectedType === type.id && styles.radioButtonSelected,
                ]}>
                  {selectedType === type.id && (
                    <View style={styles.radioButtonInner} />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{marginTop: 15}}>
          <PrimaryButton
            title="Continue"
            onPress={handleContinue}
            disabled={!selectedType}
          />
          
          <View style={styles.signInContainer}>
            <Typography style={styles.signInText}>
              Already have an account? <Typography style={styles.signInLink}>Sign In</Typography>
            </Typography>
          </View>
        </View>
        </View>

        
      </View>
    </View>
  );
}
