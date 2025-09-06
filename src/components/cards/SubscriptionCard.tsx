import React from 'react';
import { View, StyleSheet, Image, ViewStyle } from 'react-native';
import { Typography } from '../typography/Typography';
import { PrimaryButton } from '../buttons/PrimaryButton';
import LinearGradient from 'react-native-linear-gradient';

interface SubscriptionCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  imageUrl?: string;
  onSubscribe?: () => void;
  style?: ViewStyle;
}

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  subtitle,
  buttonText,
  imageUrl,
  onSubscribe,
  style,
}) => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 16,
      overflow: 'hidden',
      marginBottom: 16,
    },
    imageContainer: {
      width: '100%',
      height: 200,
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    imagePlaceholder: {
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: 20,
    },
    overlayGradient: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 120,
    },
    content: {
      zIndex: 1,
    },
    icon: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 12,
    },
    iconText: {
      fontSize: 20,
      color: '#FFFFFF',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 14,
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: 16,
      lineHeight: 20,
    },
  });

  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder} />
        )}
        
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
          style={styles.overlayGradient}
        />
        
        <View style={styles.overlay}>
          <View style={styles.content}>
            <View style={styles.icon}>
              <Typography style={styles.iconText}>💎</Typography>
            </View>
            
            <Typography style={styles.title}>{title}</Typography>
            <Typography style={styles.subtitle}>{subtitle}</Typography>
            
            <PrimaryButton
              title={buttonText}
              onPress={onSubscribe}
              style={{ height: 44, borderRadius: 22 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};