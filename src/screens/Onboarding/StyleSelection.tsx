import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';
import { ScreenContainer } from '../../components/layout/ScreenContainer';
import { ScreenHeader } from '../../components/layout/ScreenHeader';
import { ProgressIndicator } from '../../components/layout/ProgressIndicator';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';

interface StyleSelectionProps {
  navigation?: any;
}

const styles_data = [
  'Afrobeats', 'Hip-Hop', 'R&B', 'Pop', 'Jazz', 'Blues', 'Rock', 'Country',
  'Electronic', 'Classical', 'Reggae', 'Gospel', 'Alternative', 'Indie',
  'Folk', 'Funk', 'Soul', 'Disco', 'House', 'Techno'
];

export default function StyleSelection({ navigation }: StyleSelectionProps) {
  const nav = useNavigation();
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const maxSelections = 5;

  const handleStyleToggle = (style: string) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter(s => s !== style));
    } else if (selectedStyles.length < maxSelections) {
      setSelectedStyles([...selectedStyles, style]);
    }
  };

  const handleContinue = () => {
    if (selectedStyles.length > 0) {
      (navigation || nav).navigate('BuildPortfolio');
    }
  };

  const handleBack = () => {
    (navigation || nav).goBack();
  };

  const styles = StyleSheet.create({
    headerContainer: {
      marginBottom: 60,
    },
    stylesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 80,
    },
    styleChip: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 25,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      marginRight: 12,
      marginBottom: 12,
    },
    styleChipSelected: {
      backgroundColor: '#007AFF',
      borderColor: '#007AFF',
    },
    styleChipText: {
      fontSize: 14,
      color: '#FFFFFF',
      fontWeight: '500',
    },
    buttonContainer: {
      marginTop: 'auto',
      marginBottom: 60,
    },
  });

  const isButtonEnabled = selectedStyles.length > 0;

  return (
    <ScreenContainer showCurvedLine={true} curvedLineVariant="large">
      <ScreenHeader
        title=""
        onBackPress={handleBack}
      />
      
      <ProgressIndicator currentStep={1} totalSteps={3} />
      
      <View style={styles.headerContainer}>
        <Typography style={{
          fontSize: 32,
          fontWeight: '700',
          color: '#FFFFFF',
          marginBottom: 12,
          lineHeight: 40,
        }}>
          What's your style?
        </Typography>
        <Typography style={{
          fontSize: 16,
          color: '#A8A8A8',
          lineHeight: 24,
        }}>
          Help industry pros find your vibe (max {maxSelections}{'\n'}selections)
        </Typography>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.stylesContainer}>
          {styles_data.map((style) => (
            <TouchableOpacity
              key={style}
              style={[
                styles.styleChip,
                selectedStyles.includes(style) && styles.styleChipSelected
              ]}
              onPress={() => handleStyleToggle(style)}
              activeOpacity={0.8}
              disabled={!selectedStyles.includes(style) && selectedStyles.length >= maxSelections}
            >
              <Typography style={styles.styleChipText}>{style}</Typography>
              {selectedStyles.includes(style) && (
                <Typography style={[styles.styleChipText, { marginLeft: 8 }]}>✓</Typography>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Continue"
          onPress={handleContinue}
          disabled={!isButtonEnabled}
        />
      </View>
    </ScreenContainer>
  );
}