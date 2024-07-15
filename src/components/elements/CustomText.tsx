import {FC} from 'react';
import React, {StyleSheet, Text} from 'react-native';
import {AppFontSize, AppColors} from '../../constants/values';
import {CustomTextProps} from '../../types/components';

export const CustomText: FC<CustomTextProps> = ({
  children,
  style: extraStyles,
  className,
  font = 'wotfardRegular',
  color = 'black',
  size = 'md',
}) => {
  return (
    <Text
      style={[
        styles[font],
        {color: AppColors[color], fontSize: AppFontSize[size]},
        extraStyles,
      ]}
      className={className}>
      {children}
    </Text>
  );
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
