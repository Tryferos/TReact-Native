import React, {FC, PropsWithChildren} from 'react';
import {Dimensions, View, ViewStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useAppNavigation, useAppRoute} from '../../types/navigation';
import {Row} from '../elements/Row';
import {Column} from '../elements/Column';
import {CustomIcon} from '../elements/CustomIcon';
import {CustomText} from '../elements/CustomText';
import LinearGradient from 'react-native-linear-gradient';
import {
  AppBorderRadius,
  AppColors,
  AppSpace,
  SpaceType,
} from '../../constants/values';
import {Spacer} from '../elements/Spacer';
import {BottomFoods} from '../../screens/IndivudualProductScreen/components/BottomFoods';
import {RoundedBox} from '../elements/RoundedBox';

type ScreenWrapperProps = {
  title: string;
  centerTitle?: boolean;
  hasBgColor?: boolean;
  gap?: SpaceType;
  style?: ViewStyle;
  className?: string;
  showBottomFoods?: boolean;
  onBack?: () => void;
} & PropsWithChildren;

export const ScreenWrapper: FC<ScreenWrapperProps> = props => {
  const {
    children,
    centerTitle = false,
    hasBgColor = true,
    gap = 'md',
    style: extraStyles,
    showBottomFoods = false,
    className,
  } = props;
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={[
        hasBgColor ? AppColors['mainLight'] : AppColors['white'],
        hasBgColor ? `${AppColors['mainLight']}66` : AppColors['white'],
        AppColors['transparent'],
        AppColors['transparent'],
        AppColors['transparent'],
        AppColors['transparent'],
      ]}
      style={{
        flex: 1,
        paddingHorizontal: AppSpace.sm,
        paddingVertical: AppSpace['2xl'],
        paddingBottom: AppSpace.zero,
      }}>
      {showBottomFoods && <BottomFoods />}
      <Header {...props} centerTitle={centerTitle} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{}}
        className="w-[100%] h-[100%] flex">
        <Column
          style={{
            minHeight: Dimensions.get('window').height - 32 - 8 - 48,
            ...extraStyles,
          }}
          gap={gap}
          className={'py-4 ' + className}>
          {children}
        </Column>
      </ScrollView>
    </LinearGradient>
  );
};

const Header: FC<ScreenWrapperProps> = ({title, centerTitle, onBack}) => {
  const navigator = useAppNavigation();
  const router = useAppRoute();
  const handleBack = () => {
    if (typeof onBack == 'function') {
      onBack();
      return;
    }
    navigator.goBack();
  };
  const showIcon = navigator.canGoBack() && router.name != 'Main_Home';

  return (
    <Row
      className={`pb-4 w-[100%] items-center ${
        centerTitle ? 'justify-between' : ''
      }`}
      gap={centerTitle ? undefined : 'sm'}
      style={{}}>
      {showIcon && (
        <CustomIcon
          icon={'arrow-back-ios'}
          onPress={handleBack}
          size={'sm'}
          color="black"
          style={{marginTop: 6}}
        />
      )}
      <CustomText
        style={{flex: 1}}
        className="text-center"
        font="wotfardMedium"
        size={'2xl'}>
        {title}
      </CustomText>
      <View />
    </Row>
  );
};
