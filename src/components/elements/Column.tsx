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
import Animated from 'react-native-reanimated';

export const Column: FC<BoxProps> = ({
  gap = 'zero',
  backgroundColor = 'transparent',
  children,
  shadow,
  onPress,
  bgOpacity = 'FF',
  animation,
  style: extraStyles,
  clickAnimation = false,
}) => {
  const basicStyles: ViewStyle[] = [
    {
      display: 'flex',
      flexDirection: 'column',
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
          activeOpacity={clickAnimation ? 0.8 : 1}
          style={[basicStyles]}>
          <>{children}</>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={clickAnimation ? 0.8 : 1}
        style={styles}>
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
