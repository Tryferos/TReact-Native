import {FC, ReactNode} from 'react';
import React, {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {
  AppFontSize,
  AppColors,
  FontSizeType,
  ColorsType,
} from '../../constants/assets';

type CustomTextProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  className?: string;
  font?: keyof typeof styles;
  size?: FontSizeType;
  color?: ColorsType;
};

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
