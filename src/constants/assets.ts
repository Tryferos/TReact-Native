const colors = Object.freeze({
  black: '#000000',
  white: '#FFFFFF',
});

const fontSize = Object.freeze({
  '2xs': 10,
  xs: 11,
  xSm: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
});

const iconSize = Object.freeze({
  '2xs': 8,
  xs: 12,
  xSm: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48,
  '2xl': 64,
  '3xl': 96,
});

type Colors = keyof typeof colors;
type FontSize = keyof typeof fontSize;
type IconSize = keyof typeof iconSize;

export {
  //* Values to use
  colors as AppColors,
  fontSize as AppFontSize,
  iconSize as AppIconSize,
  //* Types shortcut
  type Colors as ColorsType,
  type FontSize as FontSizeType,
  type IconSize as IconSizeType,
};
