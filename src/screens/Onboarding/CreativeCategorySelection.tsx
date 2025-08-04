import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  StatusBar, 
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';
import { CurvedLineBackground } from '../../components/layout/CurvedLineBackground';
import { ProgressIndicator } from '../../components/layout/ProgressIndicator';

interface CreativeCategorySelectionProps {
  navigation?: any;
}

export default function CreativeCategorySelection({ navigation }: CreativeCategorySelectionProps) {
  const nav = useNavigation();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    { id: 'musicians', title: 'Musicians', icon: require('../../assets/darkmic.png') },
    { id: 'photographer', title: 'Photographer', icon: require('../../assets/darkmic.png') },
    { id: 'model', title: 'Model', icon: require('../../assets/darkmic.png')},
    { id: 'stylist', title: 'Stylist', icon: require('../../assets/darkmic.png') },
  ];

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleContinue = () => {
    if (selectedCategories.length > 0) {
      (navigation || nav).navigate('ProfileSetup');
    }
  };

  const handleBack = () => {
    (navigation || nav).goBack();
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
    curvedLine: {
      position: 'absolute',
      top: -50,
      right: -100,
      width: 300,
      height: 300,
      borderRadius: 150,
      borderWidth: 2,
      borderColor: 'rgba(0, 200, 255, 0.4)',
    },
    content: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 60,
      zIndex: 10,
    },
    backButton: {
      width: 44,
      height: 44,
      borderRadius: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
    },
    backButtonText: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: '600',
    },
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: 60,
    },
    progressBar: {
      width: 200,
      height: 4,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 2,
      marginRight: 12,
    },
    progressFill: {
      width: '66%',
      height: '100%',
      backgroundColor: '#007AFF',
      borderRadius: 2,
    },
    progressText: {
      fontSize: 16,
      color: '#007AFF',
      fontWeight: '600',
    },
    headerContainer: {
      marginBottom: 60,
    },
    headerText: {
      fontSize: 25,
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: 6,
      // lineHeight: 40,
    },
    subHeaderText: {
      fontSize: 16,
      color: '#A8A8A8',
      // lineHeight: 20,
    },
    categoriesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: 80,
    },
    categoryCard: {
      width: '48%',
      aspectRatio: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderWidth: 2,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
      padding: 20,
    },
    categoryCardSelected: {
      borderColor: '#007AFF',
      backgroundColor: 'rgba(0, 122, 255, 0.1)',
    },
    categoryIcon: {
      fontSize: 48,
      marginBottom: 16,
    },
    categoryImageIcon: {
      width: 48,
      height: 48,
      marginBottom: 16,
      // tintColor: '#FFFFFF',
    },
    categoryTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
      textAlign: 'center',
    },
    continueButton: {
      backgroundColor: '#007AFF',
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 'auto',
      marginBottom: 60,
      shadowColor: '#007AFF',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 8,
    },
    continueButtonDisabled: {
      backgroundColor: 'rgba(0, 122, 255, 0.3)',
      shadowOpacity: 0,
      elevation: 0,
    },
    continueButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
    },
  });

  const isButtonEnabled = selectedCategories.length > 0;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" />
      
      <View style={styles.backgroundContainer}>
        {/* <View style={styles.curvedLine} /> */}
        <CurvedLineBackground/>
        
        <View style={styles.content}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Typography style={styles.backButtonText}>‹</Typography>
          </TouchableOpacity>
          
          <ProgressIndicator currentStep={2} totalSteps={3} />
          
          <View style={styles.headerContainer}>
            <Typography style={styles.headerText}>
              What type of creative{'\n'}are you?
            </Typography>
            <Typography style={styles.subHeaderText}>
              You can select multiple categories
            </Typography>
          </View>

          <View style={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryCard,
                  selectedCategories.includes(category.id) && styles.categoryCardSelected
                ]}
                onPress={() => handleCategoryToggle(category.id)}
                activeOpacity={0.8}
              >
             
                  <Image 
                    source={category.icon} 
                    style={styles.categoryImageIcon}
                    resizeMode="contain"
                  />
                <Typography style={styles.categoryTitle}>{category.title}</Typography>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={[
              styles.continueButton,
              !isButtonEnabled && styles.continueButtonDisabled
            ]}
            onPress={handleContinue}
            disabled={!isButtonEnabled}
            activeOpacity={0.8}
          >
            <Typography style={styles.continueButtonText}>
              Set My Category
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}