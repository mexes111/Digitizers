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
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { CurvedLineBackground } from './CurvedLineBackground';

interface LinearGradientBackgroundProps {
  children: React.ReactNode;
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
  style?: any;
  // ScreenContainer features
  showCurvedLine?: boolean;
  curvedLineVariant?: 'default' | 'large' | 'small';
  curvedLinePosition?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';
  keyboardAvoiding?: boolean;
  dismissKeyboardOnTap?: boolean;
  statusBarStyle?: 'light-content' | 'dark-content';
  statusBarBackgroundColor?: string;
}

export const LinearGradientBackground: React.FC<LinearGradientBackgroundProps> = ({
  children,
  colors = [],
  start = { x: 0, y: 0 },
  end = { x: 0, y: 1 },
  locations,
  style,
  // ScreenContainer defaults
  showCurvedLine = true,
  curvedLineVariant = 'default',
  curvedLinePosition = 'topRight',
  keyboardAvoiding = false,
  dismissKeyboardOnTap = false,
  statusBarStyle = 'light-content',
  statusBarBackgroundColor,
}) => {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    },
    backgroundContainer: {
      flex: 1,
      position: 'relative',
    },
    content: {
      flex: 1,
      // paddingHorizontal: 32,
      // paddingTop: 60,
      zIndex: 10,
    },
  });

  const content = (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      locations={locations}
      style={[styles.container, style]}
    >
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
    </LinearGradient>
  );

  const wrappedContent = dismissKeyboardOnTap ? (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {content}
    </TouchableWithoutFeedback>
  ) : content;

  return (
    <>
      <StatusBar 
        barStyle={statusBarStyle} 
        backgroundColor={statusBarBackgroundColor || colors[0]} 
      />
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