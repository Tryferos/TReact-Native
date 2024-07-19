import {FC} from 'react';
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
  style: extraStyles,
  className,
  font = 'wotfardRegular',
  color = 'black',
  size = 'md',
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          styles[font],
          {color: AppColors[color], fontSize: AppFontSize[size]},
          extraStyles,
        ]}
        className={className}>
        {children}
      </Text>
    </TouchableOpacity>
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
