import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';

type SpacingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

interface GapProps {
  /** Size of the gap using theme spacing values. Default is 'md' (16px) */
  size?: SpacingSize;
  /** Custom size in pixels. Overrides the size prop if provided */
  customSize?: number;
  /** Direction of the gap. Default is 'vertical' */
  direction?: 'vertical' | 'horizontal';
  /** Additional styles to apply */
  style?: ViewStyle;
}

export const Gap: React.FC<GapProps> = ({
  size = 'md',
  customSize,
  direction = 'vertical',
  style,
}) => {
  const { theme } = useTheme();
  
  const gapSize = customSize ?? theme.spacing[size];
  
  const gapStyle: ViewStyle = {
    [direction === 'vertical' ? 'height' : 'width']: gapSize,
  };

  return <View style={[gapStyle, style]} />;
};

// Convenience components for common use cases
export const VGap: React.FC<Omit<GapProps, 'direction'>> = (props) => (
  <Gap {...props} direction="vertical" />
);

export const HGap: React.FC<Omit<GapProps, 'direction'>> = (props) => (
  <Gap {...props} direction="horizontal" />
);