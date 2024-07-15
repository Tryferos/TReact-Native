import {FC, PropsWithChildren} from 'react';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';
import {AppColors, AppGapSize, GapSizeType} from '../../constants/values';
import {BoxProps} from '../../types/components';

export const Column: FC<BoxProps> = ({
  gap = 'zero',
  backgroundColor = 'transparent',
  ...rest
}) => {
  const extraStyles = (rest.style ?? []) as [];
  return (
    <View
      {...rest}
      style={[
        {gap: AppGapSize[gap], backgroundColor: AppColors[backgroundColor]},
        ...extraStyles,
      ]}
      className={`flex flex-col`}>
      {rest.children}
    </View>
  );
};
