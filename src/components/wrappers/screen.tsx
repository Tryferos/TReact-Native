import React, {FC, PropsWithChildren} from 'react';
import {ImageComponent, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useAppNavigation} from '../../types/navigation';
import {SvgUri, SvgXml} from 'react-native-svg';
import ArrowBack from '../../../icons/arrow_back.svg';
import {SVGImage} from '../elements/Image';
import {Row} from '../elements/Row';
import {Column} from '../elements/Column';

type ScreenWrapperProps = {
  title: string;
  centerTitle?: boolean;
} & PropsWithChildren;

export const ScreenWrapper: FC<ScreenWrapperProps> = props => {
  const {children, centerTitle = false} = props;
  return (
    <View className="flex flex-col px-4">
      <Header {...props} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-[100%] h-[100%] flex">
        <Column className="pb-20">{children}</Column>
      </ScrollView>
    </View>
  );
};

const Header: FC<ScreenWrapperProps> = ({title, centerTitle}) => {
  const navigator = useAppNavigation();
  const handleBack = () => {
    navigator.goBack();
  };
  return (
    <Row
      className={`py-4 w-[100%] items-center ${
        centerTitle ? 'justify-between' : ''
      }`}>
      <SVGImage svg={ArrowBack} onPress={handleBack} size={16} />
      <View>
        <Text className="font-semibold text-2xl text-black">{title}</Text>
      </View>
      <View />
    </Row>
  );
};
