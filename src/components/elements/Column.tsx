import {FC, PropsWithChildren} from 'react';
import {
  StyleProp,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {AppColors, AppSpace} from '../../constants/values';
import {BoxProps} from '../../types/components';
import {shadowStyles} from './Row';

export const Column: FC<BoxProps> = ({
  gap = 'zero',
  backgroundColor = 'transparent',
  children,
  style: extraStyles,
  onPress,
  shadow,
}) => {
  const styles = [
    {
      display: 'flex',
      flexDirection: 'column',
      gap: AppSpace[gap],
      backgroundColor: AppColors[backgroundColor],
      ...shadowStyles[shadow ?? 'undefined'],
    },
    extraStyles,
  ] as ViewStyle[];

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles}>
        {children}
      </TouchableOpacity>
    );
  }
  return <View style={styles}>{children}</View>;
};
