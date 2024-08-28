import {FC, PropsWithChildren} from 'react';
import {Modal} from './ModalWrapper';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {CustomText} from '../elements/CustomText';
import {Row} from '../elements/Row';
import {CustomIcon} from '../elements/CustomIcon';
import {useAppNavigation} from '../../types/navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Column} from '../elements/Column';
import {Brightness} from 'react-native-color-matrix-image-filters';
import {RoundedBox} from '../elements/RoundedBox';

type ImageScreenProps = {
  children: React.ReactNode;
  src: string;
  onBack?: () => void;
} & HeaderProps;

export const ImageScreen: FC<ImageScreenProps> = ({children, src, ...rest}) => {
  return (
    <Column className="px-4 w-[100%] h-[100%] pt-12 relative">
      <ImageHeader src={src} />
      <Header {...rest} />
      <Column className="basis-[60%] bg-white absolute bottom-0 left-0 m-0 w-[100vw] rounded-t-3xl px-6 pt-6 pb-6">
        {children}
      </Column>
    </Column>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

const ImageHeader: FC<Pick<ImageScreenProps, 'src'>> = ({src}) => {
  return (
    <Brightness
      className="absolute top-0 left-0 w-[100vw] h-[50%]"
      amount={0.6}>
      <Image
        source={{uri: src}}
        resizeMode="cover"
        style={{...styles.image}}
        blurRadius={0}
      />
    </Brightness>
  );
};

type HeaderProps = {
  title: string;
  onBack?: () => void;
};

const Header: FC<HeaderProps> = ({title, onBack}) => {
  const navigation = useAppNavigation();
  const handleBack = () => {
    if (typeof onBack == 'function') {
      onBack();
      return;
    }
    navigation.goBack();
  };
  return (
    <Row className="items-center justify-between border-divider mb-5">
      <TouchableOpacity onPress={handleBack}>
        <RoundedBox>
          <CustomIcon
            icon="arrow-back-ios-new"
            size="xs"
            color="white"
            onPress={handleBack}
            style={{marginRight: 2}}
          />
        </RoundedBox>
      </TouchableOpacity>
      <CustomText font="wotfardMedium" size={'lg'} color="white">
        {title}
      </CustomText>
      <RoundedBox>
        <CustomIcon
          icon="settings"
          size="xs"
          color="white"
          onPress={() => {}}
        />
      </RoundedBox>
    </Row>
  );
};
