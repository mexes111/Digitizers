import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { ScreenWrapper } from '../../components/layout/ScreenWrapper';
import { Typography } from '../../components/typography/Typography';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { useTheme } from '../../theme/ThemeProvider';

interface UserTypeSelectionProps {
  navigation: any;
}

export default function UserTypeSelection({ navigation }: UserTypeSelectionProps) {
  const { theme } = useTheme();
  const [selected, setSelected] = useState<string | null>(null);

  const userTypes = [
    {
      id: 'creative',
      title: 'Creative Talent',
      description: 'Artists, musicians, designers, and content creators',
      icon: '🎨',
    },
    {
      id: 'industry',
      title: 'Industry Professional',
      description: 'A&Rs, labels, brands, agencies, and talent scouts',
      icon: '💼',
    },
  ];

  const handleContinue = () => {
    if (selected) {
      navigation.navigate('RegistrationOptions');
    }
  };

  const getOptionCardStyle = (isSelected: boolean) => ({
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 2,
    borderColor: isSelected ? theme.colors.primary : theme.colors.border,
    backgroundColor: isSelected ? theme.colors.surface : theme.colors.surfaceSecondary,
    marginBottom: theme.spacing.md,
    alignItems: 'center' as const,
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.spacing.xl,
      justifyContent: 'center',
    },
    headerContainer: {
      alignItems: 'center',
      marginBottom: theme.spacing.xxl,
    },
    optionsContainer: {
      marginBottom: theme.spacing.xxl,
    },
    iconContainer: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
  });

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Typography 
            variant="heading" 
            color="textPrimary" 
            weight="bold"
            style={{ textAlign: 'center', marginBottom: 8 }}
          >
            I am a...
          </Typography>
          <Typography 
            variant="body" 
            color="textSecondary"
            style={{ textAlign: 'center' }}
          >
            Choose your role to personalize your experience
          </Typography>
        </View>

        <View style={styles.optionsContainer}>
          {userTypes.map((type) => (
            <TouchableOpacity
              key={type.id}
              style={getOptionCardStyle(selected === type.id)}
              onPress={() => setSelected(type.id)}
            >
              <View style={styles.iconContainer}>
                <Typography variant="heading" style={{ fontSize: 24 }}>
                  {type.icon}
                </Typography>
              </View>
              <Typography 
                variant="subheading" 
                color={selected === type.id ? 'primary' : 'textPrimary'}
                weight="semibold"
                style={{ marginBottom: 4 }}
              >
                {type.title}
              </Typography>
              <Typography 
                variant="caption" 
                color="textSecondary"
                style={{ textAlign: 'center' }}
              >
                {type.description}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>

        <PrimaryButton
          title="Continue"
          disabled={!selected}
          onPress={handleContinue}
        />
      </View>
    </ScreenWrapper>
  );
}
