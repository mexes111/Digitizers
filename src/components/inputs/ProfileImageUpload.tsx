import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Typography } from '../typography/Typography';

interface ProfileImageUploadProps {
  onPress?: () => void;
  imageUri?: string;
}

export const ProfileImageUpload: React.FC<ProfileImageUploadProps> = ({
  onPress,
  imageUri,
}) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginBottom: 40,
    },
    profileImageWrapper: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#007AFF',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      marginBottom: 16,
    },
    profileIcon: {
      fontSize: 40,
      color: '#FFFFFF',
    },
    cameraIcon: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 3,
      borderColor: '#0A0A0A',
    },
    cameraIconText: {
      fontSize: 16,
      color: '#000000',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileImageWrapper} onPress={onPress}>
        <Typography style={styles.profileIcon}>👤</Typography>
        <View style={styles.cameraIcon}>
          <Typography style={styles.cameraIconText}>📷</Typography>
        </View>
      </TouchableOpacity>
    </View>
  );
};