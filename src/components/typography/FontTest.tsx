import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from './Typography';
import { Gap } from '../layout/Gap';

export const FontTest: React.FC = () => {
  return (
    <View style={styles.container}>
      <Typography variant="heading" weight="bold">
        Public Sans Bold Heading
      </Typography>
      <Gap size="sm" />
      
      <Typography variant="subheading" weight="semibold">
        Public Sans SemiBold Subheading
      </Typography>
      <Gap size="sm" />
      
      <Typography variant="body" weight="medium">
        Public Sans Medium Body Text
      </Typography>
      <Gap size="sm" />
      
      <Typography variant="body" weight="regular">
        Public Sans Regular Body Text - This is the default font weight for body text.
      </Typography>
      <Gap size="sm" />
      
      <Typography variant="caption" weight="light">
        Public Sans Light Caption Text
      </Typography>
      <Gap size="sm" />
      
      <Typography variant="button" weight="medium">
        Public Sans Button Text
      </Typography>
      
      <Gap size="lg" />
      
      {/* Direct font family testing */}
      <Typography style={{ fontFamily: 'PublicSans_300Light' }}>
        Direct: PublicSans_300Light
      </Typography>
      <Gap size="xs" />
      
      <Typography style={{ fontFamily: 'PublicSans_400Regular' }}>
        Direct: PublicSans_400Regular
      </Typography>
      <Gap size="xs" />
      
      <Typography style={{ fontFamily: 'PublicSans_500Medium' }}>
        Direct: PublicSans_500Medium
      </Typography>
      <Gap size="xs" />
      
      <Typography style={{ fontFamily: 'PublicSans_600SemiBold' }}>
        Direct: PublicSans_600SemiBold
      </Typography>
      <Gap size="xs" />
      
      <Typography style={{ fontFamily: 'PublicSans_700Bold' }}>
        Direct: PublicSans_700Bold
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});