import React from 'react';
import { 
  View, 
  StyleSheet, 
  StatusBar, 
  KeyboardAvoidingView, 
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { CurvedLineBackground } from './CurvedLineBackground';

interface ScreenContainerProps {
  children: React.ReactNode;
  showCurvedLine?: boolean;
  curvedLineVariant?: 'default' | 'large' | 'small';
  curvedLinePosition?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';
  keyboardAvoiding?: boolean;
  dismissKeyboardOnTap?: boolean;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  showCurvedLine = true,
  curvedLineVariant = 'default',
  curvedLinePosition = 'topRight',
  keyboardAvoiding = false,
  dismissKeyboardOnTap = false,
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0A0A0A',
    },
    backgroundContainer: {
      flex: 1,
      position: 'relative',
    },
    content: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 60,
      zIndex: 10,
    },
  });

  const content = (
    <View style={styles.backgroundContainer}>
      {showCurvedLine && (
        <CurvedLineBackground 
          variant={curvedLineVariant} 
          position={curvedLinePosition} 
        />
      )}
      
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );

  const wrappedContent = dismissKeyboardOnTap ? (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {content}
    </TouchableWithoutFeedback>
  ) : content;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" />
      {keyboardAvoiding ? (
        <KeyboardAvoidingView 
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          {wrappedContent}
        </KeyboardAvoidingView>
      ) : (
        <View style={styles.container}>
          {wrappedContent}
        </View>
      )}
    </>
  );
};