const colors = Object.freeze({
  black: '#000000',
  white: '#FFFFFF',
  gray: '#555555',
  transparent: 'transparent',
});

const fontSize = Object.freeze({
  '3xs': 10,
  '2xs': 11,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
});

const iconSize = Object.freeze({
  '3xs': 8,
  '2xs': 12,
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48,
  '2xl': 64,
  '3xl': 96,
});

const gapSize = Object.freeze({
  zero: 0,
  '3xs': 2,
  '2xs': 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 48,
});

type Colors = keyof typeof colors;
type FontSize = keyof typeof fontSize;
type IconSize = keyof typeof iconSize;
type GapSize = keyof typeof gapSize;

export {
  //* Values to use
  colors as AppColors,
  fontSize as AppFontSize,
  iconSize as AppIconSize,
  gapSize as AppGapSize,
  //* Types shortcut
  type Colors as ColorsType,
  type FontSize as FontSizeType,
  type IconSize as IconSizeType,
  type GapSize as GapSizeType,
};