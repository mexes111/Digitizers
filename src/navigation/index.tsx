import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import ProfNavigator from './ProfNavigation';
import { useAuthStore } from '../stores/authStore';

export default function Navigation() {
  const { userType, isAuthenticated, shouldUseProfNavigator } = useAuthStore();

  return (
    <NavigationContainer>
      {shouldUseProfNavigator || (isAuthenticated && userType === 'industry') ? (
        <ProfNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
}
