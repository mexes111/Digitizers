import React, { useEffect, useState } from 'react';
import {
  View,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

interface KeyboardAwareContainerProps {
  children: React.ReactNode;
  style?: any;
  behavior?: 'height' | 'position' | 'padding';
  enabled?: boolean;
}

export const KeyboardAwareContainer: React.FC<KeyboardAwareContainerProps> = ({
  children,
  style,
  behavior = 'padding',
  enabled = true,
}) => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidHideListener?.remove();
      keyboardDidShowListener?.remove();
    };
  }, []);

  if (Platform.OS === 'ios') {
    return (
      <KeyboardAvoidingView
        style={[styles.container, style]}
        behavior={behavior}
        enabled={enabled}
      >
        {children}
      </KeyboardAvoidingView>
    );
  }

  // For Android, only apply keyboard avoidance when keyboard is visible
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});