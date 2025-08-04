import React from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';

interface SignInProps {
  navigation?: any;
}

export default function SignIn({ navigation }: SignInProps) {
  const nav = useNavigation();

  const handlePhoneSignup = () => {
    (navigation || nav).navigate('EnterPhone');
  };

  const handleGoogleSignup = () => {
    // TODO: Implement Google signup
    console.log('Google signup');
  };

  const handleFacebookSignup = () => {
    // TODO: Implement Facebook signup
    console.log('Facebook signup');
  };

  const handleAppleSignup = () => {
    // TODO: Implement Apple signup
    console.log('Apple signup');
  };

  const handleSignIn = () => {
    (navigation || nav).navigate('RegistrationOptions');
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
    partialBackgroundImage: {
      position: 'absolute',
      // top: 100,
      // right: -50,
      width: 400,
      height: 300,
      opacity: 0.8,
      zIndex: 1,
      resizeMode: 'cover',
    },

    content: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 32,
      // paddingBottom: 60,
      zIndex: 10,
    },
    headerText: {
      fontSize: 24,
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: 3,
      lineHeight: 40,
    },
    subHeaderText: {
      fontSize: 14,
      color: '#A8A8A8',
      marginBottom: 25,
      lineHeight: 24,
    },
    buttonContainer: {
      marginBottom: 24,
    },
    primaryButton: {
      backgroundColor: '#007AFF',
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      shadowColor: '#007AFF',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 8,
    },
    primaryButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    dividerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    dividerText: {
      fontSize: 14,
      color: '#A8A8A8',
      marginHorizontal: 16,
    },
    socialButton: {
      height: 56,
      borderRadius: 28,
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.15)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 12,
      flexDirection: 'row',
    },
    socialButtonContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    socialButtonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#FFFFFF',
      marginRight: 12,
    },
    socialIconImage: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
    },
    socialIcon: {
      width: 24,
      height: 24,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    googleIcon: {
      backgroundColor: '#DB4437',
    },
    facebookIcon: {
      backgroundColor: '#4267B2',
    },
    appleIcon: {
      backgroundColor: '#000000',
    },
    iconText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: 'bold',
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
      fontSize: 16,
      color: '#007AFF',
      fontWeight: '600',
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" />
      
      <View style={styles.backgroundContainer}>
        {/* Partial background image */}
        <Image 
          source={require('../../assets/thumbnail1.png')} 
          style={styles.partialBackgroundImage}
        />
        
        <View style={styles.content}>
          <Typography style={styles.headerText}>
            Welcome Back
          </Typography>
          <Typography style={styles.subHeaderText}>
            Sign in to continue discovering opportunities
          </Typography>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handlePhoneSignup}
              activeOpacity={0.8}
            >
              <Typography style={styles.primaryButtonText}>
                Sign in with Phone Number
              </Typography>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Typography style={styles.dividerText}>Or sign up with</Typography>
              <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleGoogleSignup}
              activeOpacity={0.8}
            >
              <View style={styles.socialButtonContent}>
                <Typography style={styles.socialButtonText}>
                  Continue with Google
                </Typography>
                <Image 
                  source={require('../../assets/google.png')} 
                  style={styles.socialIconImage}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleFacebookSignup}
              activeOpacity={0.8}
            >
              <View style={styles.socialButtonContent}>
                <Typography style={styles.socialButtonText}>
                  Continue with Facebook
                </Typography>
                <Image 
                  source={require('../../assets/facebook.png')} 
                  style={styles.socialIconImage}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleAppleSignup}
              activeOpacity={0.8}
            >
              <View style={styles.socialButtonContent}>
                <Typography style={styles.socialButtonText}>
                  Continue with Apple
                </Typography>
                <Image 
                  source={require('../../assets/apple.png')} 
                  style={styles.socialIconImage}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.signInContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Typography style={styles.signInText}>
                Already have an account?{' '}
              </Typography>
              <TouchableOpacity onPress={handleSignIn}>
                <Typography style={styles.signInLink}>
                  Sign Up
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}