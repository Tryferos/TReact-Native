import {FC, useEffect, useState} from 'react';
import {SvgXml, XmlProps} from 'react-native-svg';
import {useAppNavigation} from '../../types/navigation';
import {View} from 'react-native';

type SVGImageProps = {
  svg: string | null | undefined;
  size?: number;
  onPress?: () => void;
} & Omit<XmlProps, 'width' | 'height' | 'xml'>;

export const SVGImage: FC<SVGImageProps> = ({
  svg,
  size = 20,
  onPress,
  ...rest
}) => {
  const navigation = useAppNavigation();

  return svg && navigation.canGoBack() ? (
    <SvgXml
      onPress={onPress}
      xml={svg}
      width={size}
      height={size}
      className="mr-4"
      {...rest}
    />
  ) : (
    <View />
  );
};
