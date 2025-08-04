import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  StatusBar, 
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView
} from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';
import { Gap, ProgressIndicator } from '../../components/layout';
import { ScreenContainer } from '../../components/layout';
import { BackButton } from '../../components/buttons/BackButton';
import { useTheme } from '../../theme/ThemeProvider';

interface AddYourVideoProps {
  navigation?: any;
}

export default function AddYourVideo({ navigation }: AddYourVideoProps) {
  const nav = useNavigation();
    const { theme } = useTheme();
  const [formData, setFormData] = useState({
    title: '',
    tags: '',
    description: ''
  });
  const [uploadCount, setUploadCount] = useState(1);
  const [video, setVideo] = useState(false)
  const maxUploads = 10;

  const handleContinue = () => {
    (navigation || nav).navigate('TellYourStory');
  };

  const handleAddMore = () => {
    // Handle adding more files
    if (uploadCount < maxUploads) {
      setUploadCount(prev => prev + 1);
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
    backgroundContainer: {
      flex: 1,
      position: 'relative',
    },
    curvedLine: {
      position: 'absolute',
      top: -50,
      right: -100,
      width: 300,
      height: 300,
      borderRadius: 150,
      borderWidth: 2,
      borderColor: 'rgba(0, 200, 255, 0.4)',
    },
    content: {
      flex: 1,
      // paddingHorizontal: 32,
      // paddingTop: 60,
      zIndex: 10,
    },
    backButton: {
      width: 44,
      height: 44,
      borderRadius: 22,
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
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: 40,
    },
    progressBar: {
      width: 200,
      height: 4,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 2,
      marginRight: 12,
    },
    progressFill: {
      width: '33%',
      height: '100%',
      backgroundColor: '#007AFF',
      borderRadius: 2,
    },
    progressText: {
      fontSize: 16,
      color: '#007AFF',
      fontWeight: '600',
    },
    headerText: {
      fontSize: 24,
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: 5,
      // lineHeight: 40,
    },
    headerSubtitle: {
      fontSize: 16,
      fontWeight: '400',
      color: '#FFFFFF',
      marginBottom: 5,
      // lineHeight: 40,
    },
    uploadSection: {
      flexDirection: 'row',
      // marginBottom: 20,
    },
    uploadPlaceholder: {
      width: 80,
      height: 80,
      borderRadius: 12,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 2,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderStyle: 'dashed',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
    uploadIcon: {
      fontSize: 24,
      color: '#A8A8A8',
    },
    uploadCounter: {
      fontSize: 12,
      color: '#A8A8A8',
      marginTop: 4,
    },
    uploadedImage: {
      width: 180,
      height: 180,
      borderRadius: 12,
      marginRight: 16,
    },
    formSection: {
      flex: 1,
    },
    sectionTitle: {
      fontSize: 13,
      // fontWeight: '600',
      color: theme.colors.textSecondary,
      marginBottom: 20,
    },
    inputContainer: {
      marginBottom: 20,
    },
    textInput: {
      // backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 10,
      paddingHorizontal: 16,
      paddingVertical: 14,
      fontSize: 14,
      color: '#FFFFFF',
      minHeight: 50,
    },
    textInputMultiline: {
      minHeight: 100,
      textAlignVertical: 'top',
    },
    buttonContainer: {
      marginTop: 'auto',
      marginBottom: 60,
    },
    continueButton: {
      backgroundColor: '#007AFF',
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
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
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    addMoreButton: {
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      backgroundColor: 'transparent',
    },
    addMoreButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
    },
  });

  const handleUpload = () => {
     setVideo((prev) => !prev)
     setTimeout(() => {
      
     }, 3000);
  }

  return (
    <ScreenContainer>
      <Gap direction='vertical' size='xl' />
      <BackButton onPress={handleBack} />
      <ProgressIndicator currentStep={1} totalSteps={3} />
      <View style={styles.backgroundContainer}>
        
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
         <Typography style={styles.headerText}>
            Add your Video
          </Typography>
          <Typography style={styles.sectionTitle}>Upload a 30-second video showcasing your talent. Perfect for performance clips or creative showcases.</Typography>
          {!video &&            
          <TouchableOpacity onPress={handleUpload}>
            <View style={styles.uploadSection}>
               <Image resizeMode='contain' style={{height: 80, width: 320}} source={require('../../assets/videoupload.png')}/>            
            </View>
          </TouchableOpacity>
          }

        {
          video &&
          <View style={styles.formSection}>
          <View>
            <Image resizeMode='contain' style={{height: 200, width: 320}} source={require('../../assets/video.png')}/>
          </View>
          <Typography style={styles.headerSubtitle}>
            Add Details
          </Typography>
        
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                value={formData.title}
                onChangeText={(text) => setFormData(prev => ({ ...prev, title: text }))}
                placeholder="Photo title or caption"
                placeholderTextColor="#666666"
              />
            </View>
            
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                value={formData.tags}
                onChangeText={(text) => setFormData(prev => ({ ...prev, tags: text }))}
                placeholder="Style/mood tags (e.g., portrait, street)"
                placeholderTextColor="#666666"
              />
            </View>
            
          </View>
          }
         
        </ScrollView>
         <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleContinue}
              activeOpacity={0.8}
            >
              <Typography style={styles.continueButtonText}>
                Continue
              </Typography>
            </TouchableOpacity>
            
          </View>
      </View>
    </ScreenContainer>
  );
}