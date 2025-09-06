import React from 'react';
import { View, StyleSheet } from 'react-native';

interface DocumentPreviewProps {
  width?: string | number;
  height?: number;
  children?: React.ReactNode;
}

export const DocumentPreview: React.FC<DocumentPreviewProps> = ({ 
  width = '100%', 
  height = 220,
  children 
}) => {
  const styles = StyleSheet.create({
    documentPreview: {
      width,
      height,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
  });

  return (
    <View style={styles.documentPreview}>
      {children}
    </View>
  );
};