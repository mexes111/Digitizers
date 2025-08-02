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

interface UploadPhotoProps {
  navigation?: any;
}

export default function UploadPhoto({ navigation }: UploadPhotoProps) {
  const nav = useNavigation();
  const [formData, setFormData] = useState({
    title: '',
    tags: '',
    description: ''
  });
  const [uploadCount, setUploadCount] = useState(1);
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
      paddingHorizontal: 32,
      paddingTop: 60,
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
      fontSize: 32,
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: 40,
      lineHeight: 40,
    },
    uploadSection: {
      flexDirection: 'row',
      marginBottom: 40,
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
      width: 80,
      height: 80,
      borderRadius: 12,
      marginRight: 16,
    },
    formSection: {
      flex: 1,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#FFFFFF',
      marginBottom: 20,
    },
    inputContainer: {
      marginBottom: 20,
    },
    textInput: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 14,
      fontSize: 16,
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

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" />
      
      <View style={styles.backgroundContainer}>
        <View style={styles.curvedLine} />
        
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Typography style={styles.backButtonText}>‹</Typography>
          </TouchableOpacity>
          
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
            <Typography style={styles.progressText}>1/3</Typography>
          </View>
          
          <Typography style={styles.headerText}>
            Upload Photo
          </Typography>

          <View style={styles.uploadSection}>
            <TouchableOpacity style={styles.uploadPlaceholder}>
              <Typography style={styles.uploadIcon}>⬆</Typography>
              <Typography style={styles.uploadCounter}>{uploadCount}/{maxUploads}</Typography>
            </TouchableOpacity>
            
            {/* Sample uploaded image */}
            <Image 
              source={{ uri: 'https://via.placeholder.com/80x80/FF9500/FFFFFF?text=🎸' }}
              style={styles.uploadedImage}
            />
          </View>

          <View style={styles.formSection}>
            <Typography style={styles.sectionTitle}>Add Details</Typography>
            
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
            
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.textInput, styles.textInputMultiline]}
                value={formData.description}
                onChangeText={(text) => setFormData(prev => ({ ...prev, description: text }))}
                placeholder="Describe this shot... what was the concept?"
                placeholderTextColor="#666666"
                multiline
                numberOfLines={4}
              />
            </View>
          </View>

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
            
            <TouchableOpacity
              style={styles.addMoreButton}
              onPress={handleAddMore}
              activeOpacity={0.8}
            >
              <Typography style={styles.addMoreButtonText}>
                Add More Files
              </Typography>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}