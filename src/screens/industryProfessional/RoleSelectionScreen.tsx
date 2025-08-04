import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { useNavigation } from '@react-navigation/native';
import { ScreenContainer } from '../../components/layout/ScreenContainer';
import { ScreenHeader } from '../../components/layout/ScreenHeader';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { ScreenHeaderProgress } from '../../components/layout/ScreenHeaderProgress';

interface RoleSelectionScreenProps {
  navigation?: any;
}

interface Role {
  id: string;
  title: string;
  description: string;
}

export default function RoleSelectionScreen({ navigation }: RoleSelectionScreenProps) {
  const nav = useNavigation();
  const [selectedRole, setSelectedRole] = useState<string>('ar-executive');

  const roles: Role[] = [
    {
      id: 'ar-executive',
      title: 'A&R Executive',
      description: 'Discover, evaluate and sign artists for record labels',
    },
    {
      id: 'talent-manager',
      title: 'Talent Manager',
      description: 'Guide and develop artist careers and business opportunities',
    },
    {
      id: 'brand-manager',
      title: 'Brand Manager',
      description: 'Create partnerships between brands and creative talent',
    },
    {
      id: 'creative-director',
      title: 'Creative Director',
      description: 'Direct creative campaigns and collaborate with talent',
    },
    {
      id: 'music-producer',
      title: 'Music Producer',
      description: 'Create music and seek collaboration opportunities',
    },
    {
      id: 'booking-agent',
      title: 'Booking Agent',
      description: 'Secure performance opportunities and manage bookings',
    },
    {
      id: 'record-label',
      title: 'Record Label / Label Executive',
      description: 'Handle label operations, marketing and artist relations',
    },
  ];

  const handleContinue = () => {
    if (selectedRole) {
      (navigation || nav).navigate('ProfProfileSetup');
    }
  };

  const handleBack = () => {
    (navigation || nav).goBack();
  };

  const RoleCard = ({ role }: { role: Role }) => (
    <TouchableOpacity
      style={[
        styles.roleCard,
        selectedRole === role.id && styles.roleCardSelected,
      ]}
      onPress={() => setSelectedRole(role.id)}
    >
      <View style={styles.roleContent}>
        <Typography style={styles.roleTitle}>{role.title}</Typography>
        <Typography style={styles.roleDescription}>{role.description}</Typography>
      </View>
      <View style={[
        styles.radioButton,
        selectedRole === role.id && styles.radioButtonSelected,
      ]}>
        {selectedRole === role.id && <View style={styles.radioButtonInner} />}
      </View>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: 20,
    },
    progressText: {
      fontSize: 14,
      color: 'rgba(255, 255, 255, 0.7)',
      fontWeight: '500',
    },
    scrollContainer: {
      flex: 1,
    },
    rolesContainer: {
      paddingBottom: 20,
    },
    roleCard: {
    //   backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.1)',
      padding: 16,
      marginBottom: 12,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 7
    },
    roleCardSelected: {
      borderColor: '#007AFF',
    //   backgroundColor: 'rgba(0, 122, 255, 0.1)',
    },
    roleContent: {
      flex: 1,
    },
    roleTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
      marginBottom: 4,
    },
    roleDescription: {
      fontSize: 14,
      color: 'rgba(255, 255, 255, 0.7)',
      lineHeight: 20,
    },
    radioButton: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'rgba(255, 255, 255, 0.3)',
      marginLeft: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    radioButtonSelected: {
      borderColor: '#007AFF',
    },
    radioButtonInner: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#007AFF',
    },
    buttonContainer: {
      paddingTop: 20,
      paddingBottom: 60,
    },
  });

  return (
    <ScreenContainer showCurvedLine={true}>
      <ScreenHeaderProgress
      currentStep={1}
      totalSteps={3}
        title="What is your role in the industry?"
        subtitle="Help us customize your experience based on how you work with talent"
        onBackPress={handleBack}
      />

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.rolesContainer}>
          {roles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Set My Role"
          onPress={handleContinue}
          disabled={!selectedRole}
        />
      </View>
    </ScreenContainer>
  );
}