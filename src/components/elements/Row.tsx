import {FC, PropsWithChildren} from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';
import {AppColors, AppGapSize, GapSizeType} from '../../constants/values';
import {BoxProps} from '../../types/components';

export const Row: FC<BoxProps> = ({
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
      className={`flex flex-row`}>
      {rest.children}
    </View>
  );
};
