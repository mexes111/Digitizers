import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography } from '../../components/typography/Typography';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { BackButton } from '../../components/buttons/BackButton';
import { SocialMediaInput } from '../../components/inputs/SocialMediaInput';
import { ProgressBar } from '../../components/layout/ProgressBar';
import { CurvedLineBackground } from '../../components/layout/CurvedLineBackground';
import { Gap } from '../../components/layout/Gap';
// import { Ionicons } from '@expo/vector-icons';

interface SocialMediaData {
  instagram: string;
  youtube: string;
  tiktok: string;
}

export default function SocialMediaLinks() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  
  const [socialData, setSocialData] = useState<SocialMediaData>({
    instagram: '',
    youtube: '',
    tiktok: '',
  });

  const handleContinue = () => {
    navigation.navigate('ProfileSuccess' as never);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const updateSocialData = (platform: keyof SocialMediaData, value: string) => {
    setSocialData(prev => ({ ...prev, [platform]: value }));
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    backgroundContainer: {
      flex: 1,
      position: 'relative',
    },
    header: {
      marginTop: 35,
      paddingHorizontal: 24,
      zIndex: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    progressContainer: {
      paddingHorizontal: 24,
      marginTop: theme.spacing.sm,
      zIndex: 10,
    },
    scrollContainer: {
      flex: 1,
      zIndex: 10,
    },
    content: {
      paddingHorizontal: 24,
      paddingTop: theme.spacing.sm,
    },
    headerText: {
      fontSize: 22,
      fontWeight: '800',
      color: theme.colors.textPrimary,
      marginBottom: theme.spacing.sm,
      lineHeight: 36,
    },
    subHeaderText: {
      fontSize: 13,
      color: theme.colors.textSecondary,
      lineHeight: 24,
      marginBottom: theme.spacing.xl,
    },
    formContainer: {
      marginBottom: theme.spacing.xl,
    },
    buttonContainer: {
      paddingHorizontal: 24,
      paddingBottom: theme.spacing.xl,
    },
    bottomIndicator: {
      width: 134,
      height: 5,
      backgroundColor: theme.colors.textPrimary,
      borderRadius: 2.5,
      alignSelf: 'center',
      marginBottom: theme.spacing.sm,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      
      <View style={styles.backgroundContainer}>
        <CurvedLineBackground />
        
        <View style={styles.header}>
          <BackButton onPress={handleBack} />
        </View>

        <View style={styles.progressContainer}>
          <ProgressBar currentStep={2} totalSteps={3} />
        </View>

        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Typography style={styles.headerText}>
              Build Your Online Presence
            </Typography>
            <Typography style={styles.subHeaderText}>
              Link your social profiles to build credibility and show industry professionals your existing audience and engagement.
            </Typography>

            <View style={styles.formContainer}>
              <SocialMediaInput
                platform="Instagram"
                icon={<Image resizeMode='contain' source={require('../../assets/instagram.png')} style={{width: 20, height: 20}} />}
                placeholder="Instagram username"
                value={socialData.instagram}
                onChangeText={(text) => updateSocialData('instagram', text)}
              />

              <SocialMediaInput
                platform="YouTube"
                icon={<Image resizeMode='contain' source={require('../../assets/youtube.png')} style={{width: 20, height: 20}} />}
                placeholder="Youtube username"
                value={socialData.youtube}
                onChangeText={(text) => updateSocialData('youtube', text)}
              />

              <SocialMediaInput
                platform="TikTok"
                icon={<Image resizeMode='contain' source={require('../../assets/tiktok.png')} style={{width: 20, height: 20}} />}
                placeholder="Tiktok Username"
                value={socialData.tiktok}
                onChangeText={(text) => updateSocialData('tiktok', text)}
              />
            </View>
          </View>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Save Accounts"
            onPress={handleContinue}
          />
        </View>

        {/* <View style={styles.bottomIndicator} /> */}
      </View>
    </View>
  );
}