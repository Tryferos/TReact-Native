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
import {UserHeader} from '../organisms/UserHeader';
import {AppIconsType} from '../../types/icons';

type ScreenWrapperProps = {
  title: string;
  centerTitle?: boolean;
  hasBgColor?: boolean;
  gap?: SpaceType;
  style?: ViewStyle;
  className?: string;
  showBottomFoods?: boolean;
  onBack?: () => void;
  showUserHeader?: boolean;
  trailingIcon?: AppIconsType;
  canGoBack?: boolean;
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
        hasBgColor ? `${AppColors['mainLight']}77` : AppColors['white'],
        hasBgColor ? `${AppColors['mainLight']}44` : AppColors['white'],
        hasBgColor ? `${AppColors['mainLight']}33` : AppColors['white'],
        hasBgColor ? `${AppColors['mainLight']}33` : AppColors['white'],
        hasBgColor ? `${AppColors['mainLight']}22` : AppColors['white'],
        AppColors['transparent'],
        AppColors['transparent'],
        AppColors['transparent'],
        AppColors['transparent'],
        AppColors['transparent'],
      ]}
      style={{
        flex: 1,
        // paddingHorizontal: AppSpace.sm,
        paddingVertical: AppSpace['2xl'],
        paddingBottom: AppSpace.zero,
      }}>
      {showBottomFoods && <BottomFoods />}
      <Row style={{paddingHorizontal: AppSpace.sm}}>
        <Header {...props} centerTitle={centerTitle} />
      </Row>
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
          className={'px-4 py-4 ' + className}>
          {children}
        </Column>
      </ScrollView>
    </LinearGradient>
  );
};

const Header: FC<ScreenWrapperProps> = ({
  title,
  centerTitle,
  onBack,
  showUserHeader = false,
  trailingIcon,
  canGoBack = true,
}) => {
  const navigator = useAppNavigation();
  const router = useAppRoute();
  const handleBack = () => {
    if (typeof onBack == 'function') {
      onBack();
      return;
    }
    navigator.goBack();
  };
  const showIcon =
    navigator.canGoBack() &&
    router.name != 'Main_Home' &&
    router.name != 'SignIn_Screen' &&
    canGoBack;

  if (showUserHeader) {
    return <UserHeader />;
  }

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
      {trailingIcon ? (
        <CustomIcon icon={trailingIcon} size={'md'} color={'black'} />
      ) : (
        <View />
      )}
    </Row>
  );
};
