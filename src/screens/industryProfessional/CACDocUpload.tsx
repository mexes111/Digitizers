import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';
import { ScreenHeader } from '../../components/layout/ScreenHeader';
import { DocumentPreview } from '../../components/layout/DocumentPreview';
import { CameraButton } from '../../components/buttons/CameraButton';
import { HomeIndicator } from '../../components/layout/HomeIndicator';
import { LinearGradientBackground } from '../../components/layout/LinearGradientBackground';
import { useTheme } from '../../theme/ThemeProvider';

interface CACDocUploadProps {
  navigation?: any;
}

export default function CACDocUpload({ navigation }: CACDocUploadProps) {
  const nav = useNavigation();
  const {theme} = useTheme()
  const handleCameraPress = () => {
    // Handle camera functionality
    (navigation || nav).navigate('SelfieUpload');
  };

  const handleBack = () => {
    (navigation || nav).goBack();
  };

  const styles = StyleSheet.create({
    customHeader: {
      paddingTop: 60,
      paddingHorizontal: 20,
      paddingBottom: 30,
    },
    headerContent: {
      marginTop: -40, // Adjust for ScreenHeader's built-in spacing
    },
    title: {
      fontSize: 26,
      fontWeight: '700',
      color: '#FFFFFF',
      lineHeight: 30,
      marginBottom: 6,
    },
    subtitle: {
      fontSize: 14,
      color: 'rgba(255, 255, 255, 0.8)',
    //   lineHeight: 24,
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: 20,
      justifyContent: 'space-between',
    },
    documentPreviewContainer: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      paddingVertical: 20,
    },
    bottomContainer: {
      alignItems: 'center',
      paddingBottom: 40,
    },
    homeIndicatorContainer: {
      marginTop: 20,
    },
  });

  return (
    <LinearGradientBackground 
      colors={['#1955a4', '#0b2b54']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      {/* Custom header to match the blue background design */}
      <View style={styles.customHeader}>
        <ScreenHeader
          title=""
          onBackPress={handleBack}
          showBackButton={true}
        />
        
        <View style={styles.headerContent}>
          <Typography style={styles.title}>
            We need to verify your identity
          </Typography>
          
          <Typography style={styles.subtitle}>
            Accepted documents: Passport, Voters License, Drivers License, Company CAC
          </Typography>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.documentPreviewContainer}>
          <DocumentPreview>
            {/* Empty document preview area - matches the image exactly */}
          </DocumentPreview>
        </View>

        <View style={styles.bottomContainer}>
          <CameraButton onPress={handleCameraPress} />
          
          <View style={styles.homeIndicatorContainer}>
            <HomeIndicator />
          </View>
        </View>
      </View>
    </LinearGradientBackground>
  );
}