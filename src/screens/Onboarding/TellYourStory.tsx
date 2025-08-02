import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  StatusBar, 
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';

interface TellYourStoryProps {
  navigation?: any;
}

export default function TellYourStory({ navigation }: TellYourStoryProps) {
  const nav = useNavigation();
  const [story, setStory] = useState('');
  const maxCharacters = 500;

  const handleSave = () => {
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
      marginBottom: 60,
    },
    progressBar: {
      width: 200,
      height: 4,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 2,
      marginRight: 12,
    },
    progressFill: {
      width: '66%',
      height: '100%',
      backgroundColor: '#007AFF',
      borderRadius: 2,
    },
    progressText: {
      fontSize: 16,
      color: '#007AFF',
      fontWeight: '600',
    },
    headerContainer: {
      marginBottom: 40,
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
    },
    textInputContainer: {
      flex: 1,
      marginBottom: 20,
    },
    textInput: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 16,
      paddingHorizontal: 20,
      paddingVertical: 20,
      fontSize: 16,
      color: '#FFFFFF',
      textAlignVertical: 'top',
      minHeight: 200,
      maxHeight: 300,
    },
    characterCount: {
      fontSize: 14,
      color: '#A8A8A8',
      textAlign: 'left',
      marginTop: 12,
    },
    saveButton: {
      backgroundColor: '#007AFF',
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 60,
      shadowColor: '#007AFF',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 8,
    },
    saveButtonText: {
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
        
        <View style={styles.content}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Typography style={styles.backButtonText}>‹</Typography>
          </TouchableOpacity>
          
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
            <Typography style={styles.progressText}>2/3</Typography>
          </View>
          
          <View style={styles.headerContainer}>
            <Typography style={styles.headerText}>
              Tell Your Story
            </Typography>
            <Typography style={styles.subHeaderText}>
              Share your creative journey and what makes{'\n'}you unique
            </Typography>
          </View>

          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              value={story}
              onChangeText={setStory}
              placeholder="Share what drives your creativity. Mention your unique style or approach"
              placeholderTextColor="#666666"
              multiline
              maxLength={maxCharacters}
            />
            <Typography style={styles.characterCount}>
              Characters: {story.length}/{maxCharacters}
            </Typography>
          </View>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSave}
            activeOpacity={0.8}
          >
            <Typography style={styles.saveButtonText}>
              Save My Story
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}