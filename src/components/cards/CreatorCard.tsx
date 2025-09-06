import React from 'react';
import { View, StyleSheet, Image, ViewStyle } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography } from '../typography/Typography';
import LinearGradient from 'react-native-linear-gradient';

interface CreatorCardProps {
  name: string;
  title: string;
  location: string;
  profileImage?: string;
  style?: ViewStyle;
}

export const CreatorCard: React.FC<CreatorCardProps> = ({
  name,
  title,
  location,
  profileImage,
  style,
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    card: {
      borderRadius: theme.borderRadius.xxl,
      overflow: 'hidden',
      aspectRatio: 1.2,
      position: 'relative',
      shadowColor: '#1E3A8A',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 12,
    },
    gradient: {
      flex: 1,
      padding: theme.spacing.lg,
      justifyContent: 'space-between',
    },
    header: {
      // flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    logo: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FFFFFF',
      textShadowColor: 'rgba(0, 0, 0, 0.3)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 3,
    },
    content: {
      flex: 1,
      marginTop: 40
      // justifyContent: 'flex-end',
    },
    profileSection: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    profileImage: {
      width: 48,
      height: 48,
      borderRadius: 24,
      marginRight: theme.spacing.sm,
      borderWidth: 2,
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    profilePlaceholder: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      marginRight: theme.spacing.sm,
      borderWidth: 2,
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    name: {
      fontSize: theme.fontSize.lg,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 2,
      textShadowColor: 'rgba(0, 0, 0, 0.3)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
    },
    title: {
      fontSize: theme.fontSize.sm,
      color: 'rgba(255, 255, 255, 0.95)',
      marginBottom: theme.spacing.xs,
      textShadowColor: 'rgba(0, 0, 0, 0.2)',
      textShadowOffset: { width: 0.5, height: 0.5 },
      textShadowRadius: 1,
    },
    location: {
      fontSize: theme.fontSize.sm,
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: theme.spacing.md,
      textShadowColor: 'rgba(0, 0, 0, 0.2)',
      textShadowOffset: { width: 0.5, height: 0.5 },
      textShadowRadius: 1,
    },
    footer: {
      fontSize: theme.fontSize.xs,
      color: 'rgba(255, 255, 255, 0.95)',
      textShadowColor: 'rgba(0, 0, 0, 0.2)',
      textShadowOffset: { width: 0.5, height: 0.5 },
      textShadowRadius: 1,
    },
  });

  return (
    <View style={[styles.card, style]}>
      <LinearGradient
        colors={['#60A5FA', '#060de0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <Typography style={styles.logo}>D'</Typography>
        </View>
        
        <View style={styles.content}>
          <View style={styles.profileSection}>
            {profileImage ? (
              <Image source={profileImage} style={styles.profileImage} />
            ) : (
              <View style={styles.profilePlaceholder} />
            )}
          </View>
          
          <Typography style={styles.name}>{name}</Typography>
          <Typography style={styles.title}>{title}</Typography>
          <Typography style={styles.location}>{location}</Typography>
          
          <Typography style={styles.footer}>
            Discover me on Digitizers
          </Typography>
        </View>
      </LinearGradient>
    </View>
  );
};