import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ViewStyle } from 'react-native';
import { Typography } from '../typography/Typography';
import { useTheme } from '../../theme/ThemeProvider';

interface ContentCardProps {
  title: string;
  author: string;
  location: string;
  views: string;
  likes: string;
  imageUrl?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export const ContentCard: React.FC<ContentCardProps> = ({
  title,
  author,
  location,
  views,
  likes,
  imageUrl,
  onPress,
  style,
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: 16,
      overflow: 'hidden',
      marginBottom: 16,
    },
    imageContainer: {
      width: '100%',
      height: 200,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      padding: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 12,
    },
    authorInfo: {
      flex: 1,
    },
    authorName: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
      marginBottom: 4,
    },
    location: {
      fontSize: 14,
      color: 'rgba(255, 255, 255, 0.7)',
    },
    moreButton: {
      padding: 4,
    },
    moreText: {
      fontSize: 18,
      color: 'rgba(255, 255, 255, 0.7)',
      fontWeight: 'bold',
    },
    title: {
      fontSize: 14,
      color: 'rgba(255, 255, 255, 0.9)',
      lineHeight: 20,
      marginBottom: 12,
    },
    stats: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 16,
    },
    statIcon: {
      width: 16,
      height: 16,
      marginRight: 4,
    },
    statText: {
      fontSize: 12,
      color: 'rgba(255, 255, 255, 0.7)',
    },
  });

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.imageContainer}>
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder} />
        )}
      </View>
      
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.authorInfo}>
            <Typography style={styles.authorName}>{author}</Typography>
            <Typography style={styles.location}>{location}</Typography>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <Typography style={styles.moreText}>⋯</Typography>
          </TouchableOpacity>
        </View>
        
        <Typography style={styles.title}>{title}</Typography>
        
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <View style={[styles.statIcon, { backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 8 }]} />
            <Typography style={styles.statText}>{views} Views</Typography>
          </View>
          <View style={styles.statItem}>
            <View style={[styles.statIcon, { backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 8 }]} />
            <Typography style={styles.statText}>{likes} Views</Typography>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};