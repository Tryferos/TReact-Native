import {FC, PropsWithChildren} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {AppColors, AppSpace} from '../../constants/values';
import {BoxProps} from '../../types/components';

export const Row: FC<BoxProps> = ({
  gap = 'zero',
  backgroundColor = 'transparent',
  children,
  shadow,
  onPress,
  style: extraStyles,
}) => {
  const styles = [
    {
      display: 'flex',
      flexDirection: 'row',
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

export const shadowStyles = StyleSheet.create({
  undefined: {},
  shadowSmall: {
    shadowColor: 'rgba(50, 50, 93, 0.3)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 100,
    elevation: 10, // This is for Android shadow
    marginHorizontal: AppSpace['2xs'],
    marginVertical: AppSpace['3xs'],
  },
  shadowMedium: {
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {width: 0, height: 14},
    shadowOpacity: 1,
    shadowRadius: 28,
    elevation: 10,
    marginHorizontal: AppSpace['2xs'],
    marginVertical: AppSpace['3xs'],
  },
  shadowMediumLight: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 14},
    shadowOpacity: 1,
    shadowRadius: 28,
    elevation: 10,
    marginHorizontal: AppSpace['2xs'],
    marginVertical: AppSpace['3xs'],
  },
  shadowBottom: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 14},
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 10,
  },
});
//box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
