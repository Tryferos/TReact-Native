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
import Animated from 'react-native-reanimated';

export const Row: FC<BoxProps> = ({
  gap = 'zero',
  backgroundColor = 'transparent',
  children,
  shadow,
  bgOpacity = 'FF',
  onPress,
  animation,
  style: extraStyles,
}) => {
  const basicStyles: ViewStyle[] = [
    {
      display: 'flex',
      flexDirection: 'row',
    },
  ];
  const styles: ViewStyle[] = [
    {
      gap: AppSpace[gap],
      backgroundColor: AppColors[backgroundColor] + bgOpacity,
      ...shadowStyles[shadow ?? 'undefined'],
    },
    ...basicStyles,
    extraStyles as ViewStyle,
  ];

  if (onPress && animation) {
    return (
      <Animated.View {...animation} style={[styles]}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={1}
          style={[basicStyles]}>
          <>{children}</>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles}>
        <>{children}</>
      </TouchableOpacity>
    );
  }
  if (animation) {
    return (
      <Animated.View {...animation} style={[styles]}>
        {children}
      </Animated.View>
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
