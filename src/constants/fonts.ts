export const FONTS = {
  light: 'PublicSans_300Light',
  regular: 'PublicSans_400Regular',
  medium: 'PublicSans_500Medium',
  semibold: 'PublicSans_600SemiBold',
  bold: 'PublicSans_700Bold',
} as const;

export type FontWeight = keyof typeof FONTS;

export const getFontFamily = (weight: FontWeight = 'regular'): string => {
  return FONTS[weight];
};