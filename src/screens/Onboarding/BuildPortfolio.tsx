import React from 'react';
import { 
  View, 
  StyleSheet, 
  StatusBar, 
  TouchableOpacity,
  Image
} from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../components/buttons/BackButton';
import { ScreenContainer } from '../../components/layout/ScreenContainer';

interface BuildPortfolioProps {
  navigation?: any;
}

export default function BuildPortfolio({ navigation }: BuildPortfolioProps) {
  const nav = useNavigation();

  const handleStartUploading = () => {
    (navigation || nav).navigate('UploadWork');
  };

  const handleSkip = () => {
    (navigation || nav).navigate('TellYourStory');
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
      marginBottom: 80,
    },
    backButtonText: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: '600',
    },
    iconContainer: {
      // alignItems: 'center',
      // marginBottom: 60,
    },
    iconWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    musicIcon: {
      fontSize: 48,
      marginRight: 8,
    },
    imageIcon: {
      fontSize: 48,
      backgroundColor: '#00C7FF',
      padding: 12,
      borderRadius: 12,
      marginRight: 8,
    },
    videoIcon: {
      fontSize: 48,
      backgroundColor: '#FF9500',
      padding: 12,
      borderRadius: 12,
    },
    headerContainer: {
      marginBottom: 30,
    },
    headerText: {
      fontSize: 24,
      fontWeight: '700',
      color: '#FFFFFF',
      // marginBottom: 16,
      lineHeight: 40,
    },
    subHeaderText: {
      fontSize: 14,
      color: '#A8A8A8',
      lineHeight: 24,
      // marginBottom: 40,
    },
    featuresContainer: {
      marginBottom: 80,
    },
    featureItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    checkIcon: {
      fontSize: 20,
      color: '#00C851',
      marginRight: 16,
      width: 24,
      textAlign: 'center',
    },
    featureText: {
      fontSize: 16,
      color: '#A8A8A8',
      flex: 1,
    },
    buttonContainer: {
      marginTop: 'auto',
      marginBottom: 60,
    },
    startButton: {
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
    startButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    skipButton: {
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      backgroundColor: 'transparent',
    },
    skipButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
    },
  });

  return (
    <ScreenContainer>
      {/* <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" /> */}        
        <View style={styles.content}>
        <BackButton onPress={handleBack} />
          
          <View style={styles.iconContainer}>
          <Image resizeMode='contain' style={{height: 100, width: 100}} source={require('../../assets/music.png')} />
          </View>
          
          <View style={styles.headerContainer}>
            <Typography style={styles.headerText}>
              Build Your Portfolio
            </Typography>
            <Typography style={styles.subHeaderText}>
              Upload your best work to get discovered by{'\n'}industry professionals
            </Typography>
          </View>

          <View style={styles.featuresContainer}>
            <View style={styles.featureItem}>
              <Typography style={styles.checkIcon}>✓</Typography>
              <Typography style={styles.featureText}>
                Showcase your visual work
              </Typography>
            </View>
            <View style={styles.featureItem}>
              <Typography style={styles.checkIcon}>✓</Typography>
              <Typography style={styles.featureText}>
                Upload your music tracks
              </Typography>
            </View>
            <View style={styles.featureItem}>
              <Typography style={styles.checkIcon}>✓</Typography>
              <Typography style={styles.featureText}>
                Share your video content
              </Typography>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.startButton}
              onPress={handleStartUploading}
              activeOpacity={0.8}
            >
              <Typography style={styles.startButtonText}>
                Start Uploading
              </Typography>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.skipButton}
              onPress={handleSkip}
              activeOpacity={0.8}
            >
              <Typography style={styles.skipButtonText}>
                Skip For Now
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
    </ScreenContainer>
  );
}