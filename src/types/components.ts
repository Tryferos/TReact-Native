import {ViewProps, ViewStyle, TextStyle} from 'react-native';
import {ColorsType, FontSizeType, GapSizeType} from '../constants/values';
import {FontStyles} from '../components/elements/CustomText';

type BoxKeys = keyof Pick<
  ViewStyle,
  'gap' | 'rowGap' | 'columnGap' | 'backgroundColor'
>;
export type BoxProps = Omit<ViewProps, 'style'> & {
  style?: Array<Omit<ViewStyle, BoxKeys>> | Omit<ViewStyle, BoxKeys>;
  gap?: GapSizeType;
  backgroundColor?: ColorsType;
};

type TextKeys = keyof Pick<TextStyle, 'color' | 'fontSize' | 'fontFamily'>;
export type CustomTextProps = Omit<ViewProps, 'style'> & {
  style?: Array<Omit<TextStyle, TextKeys>> | Omit<TextStyle, TextKeys>;
  font?: FontStyles;
  size?: FontSizeType;
  color?: ColorsType;
};
