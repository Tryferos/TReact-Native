import {FC, useMemo} from 'react';
import React, {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {AppFontSize, AppColors} from '../../constants/values';
import {CustomTextProps} from '../../types/components';

export const CustomText: FC<CustomTextProps> = ({
  children,
  boxStyles,
  style: extraStyles,
  font = 'wotfardRegular',
  color = 'black',
  size = 'md',
  className,
  onPress,
}) => {
  const text = useMemo(() => {
    return (
      <Text
        className={className}
        style={[
          styles[font],
          {color: AppColors[color], fontSize: AppFontSize[size]},
          extraStyles,
          boxStyles,
        ]}>
        {children}
      </Text>
    );
  }, [children, className, color, extraStyles, font, onPress, size]);
  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} style={boxStyles}>
        {text}
      </TouchableOpacity>
    );
  }
  return text;
};

export type FontStyles = keyof typeof styles;

const styles = StyleSheet.create({
  wotfardRegular: {
    fontFamily: 'wotfard-regular-webfont',
  },
  wotfardMedium: {
    fontFamily: 'wotfard-medium-webfont',
  },
  wotfardSemibold: {
    fontFamily: 'wotfard-semibold-webfont',
  },
});
