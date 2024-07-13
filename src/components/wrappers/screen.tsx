import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useAppNavigation} from '../../types/navigation';
import {Row} from '../elements/Row';
import {Column} from '../elements/Column';
import {CustomIcon} from '../elements/CustomIcon';
import {CustomText} from '../elements/CustomText';

type ScreenWrapperProps = {
  title: string;
  centerTitle?: boolean;
} & PropsWithChildren;

export const ScreenWrapper: FC<ScreenWrapperProps> = props => {
  const {children, centerTitle = false} = props;
  return (
    <View className="flex flex-col px-4">
      <Header {...props} centerTitle={centerTitle} />
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
      {navigator.canGoBack() && (
        <CustomIcon
          icon={'arrow-back-ios'}
          onPress={handleBack}
          size={'sm'}
          color="black"
        />
      )}
      <View>
        <CustomText
          font="wotfardMedium"
          size={'2xl'}
          style={{marginBottom: 100}}
          className="">
          {title}
        </CustomText>
      </View>
      <View />
    </Row>
  );
};
