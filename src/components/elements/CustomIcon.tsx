import {FC} from 'react';
import {StyleProp, TextStyle, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  AppColors,
  AppIconSize,
  ColorsType,
  IconSizeType,
} from '../../constants/assets';
import MaterialIconsTypes from 'react-native-vector-icons/glyphmaps/MaterialIcons.json';
import FontAwesomeIconsTypes from 'react-native-vector-icons/glyphmaps/FontAwesome.json';
import {AppIconsType} from '../../types/icons';

type CustomIconProps = {
  icon: AppIconsType;
  prefers?: 'material' | 'fontAwesome';
  color?: ColorsType;
  size?: IconSizeType;
  onPress?: () => void;
  style?: Omit<StyleProp<TextStyle>, 'width' | 'height'>;
};

export const CustomIcon: FC<CustomIconProps> = ({
  icon,
  size = 'md',
  color = 'black',
  prefers = 'material',
  onPress,
  style,
}) => {
  const iconProps = {
    name: icon,
    size: AppIconSize[size],
    color: AppColors[color],
    onPress: onPress,
    style: style,
  };
  if (prefers === 'material' && MaterialIconsTypes[icon as IconType]) {
    return <MaterialIcons {...iconProps} />;
  }
  if (FontAwesomeIconsTypes[icon as IconType]) {
    return <FontAwesome {...iconProps} />;
  }
  return null;
};

type IconType = keyof typeof MaterialIconsTypes &
  keyof typeof FontAwesomeIconsTypes;
