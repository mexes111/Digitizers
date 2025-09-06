import React from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography } from '../../components/typography/Typography';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { BackButton } from '../../components/buttons/BackButton';
import { CurvedLineBackground } from '../../components/layout/CurvedLineBackground';
import { Gap } from '../../components/layout/Gap';

export default function ProfileSuccess() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  const handleContinue = () => {
    navigation.navigate('CreatorCard' as never);
  };

  const handleBack = () => {
    navigation.goBack();
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
      marginTop: 50,
      paddingHorizontal: 24,
      zIndex: 10,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
      zIndex: 10,
    //   marginTop: -50
    },
    emojiContainer: {
      marginBottom: theme.spacing.xl,
    },
    emoji: {
      fontSize: 80,
    },
    headerText: {
      fontSize: 24,
      fontWeight: '800',
      color: theme.colors.textPrimary,
      textAlign: 'center',
      marginBottom: theme.spacing.md,
      lineHeight: 36,
    },
    subHeaderText: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: 24,
      paddingHorizontal: theme.spacing.md,
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
    buttonLater: {
     backgroundColor: theme.colors.background, 
     elevation: 0,    
    shadowOpacity: 0,
    borderColor: theme.colors.border,
    borderWidth: 1,
    marginTop: 15
      }
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      
      <View style={styles.backgroundContainer}>
        <CurvedLineBackground  variant='default' position='topLeft'  />
        <CurvedLineBackground  />
        
        <View style={styles.header}>
          <BackButton onPress={handleBack} />
        </View>

        <View style={styles.content}>
          <Image
            source={require('../../assets/yourProfile.png')}
            style={{ width: 150, height: 150 }}
          />
          
          <Typography style={styles.headerText}>
            Your profile is live!
          </Typography>
          
          <Typography style={styles.subHeaderText}>
            Industry pros can now discover your work. Let us get you verified in the most creative way possible.
          </Typography>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Generate my creator card"
            onPress={handleContinue}
          />
          <Gap size={16} />
          <PrimaryButton
          style={styles.buttonLater}
            title="I will do it later"
            onPress={handleContinue}
          />
        </View>

        <View style={styles.bottomIndicator} />
      </View>
    </View>
  );
}