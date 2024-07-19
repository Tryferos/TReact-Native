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

type ImageScreenProps = {
  children: React.ReactNode;
  src: string;
} & HeaderProps;

export const ImageScreen: FC<ImageScreenProps> = ({children, src, ...rest}) => {
  return (
    <Column className="px-4 w-[100vw] h-[100vh] pt-12 relative">
      <ImageHeader src={src} />
      <Header {...rest} />
      <Column className="min-h-[60vh] bg-white absolute bottom-0 left-0 m-0 w-[100vw] rounded-t-3xl px-6 pt-6 pb-6">
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
      className="absolute top-0 left-0 w-[100vw] h-[45vh]"
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
};

const Header: FC<HeaderProps> = ({title}) => {
  const navigation = useAppNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <Row className="items-center justify-between border-divider mb-5">
      <TouchableOpacity onPress={handleBack}>
        <Box>
          <CustomIcon
            icon="arrow-back-ios-new"
            size="xs"
            color="white"
            onPress={handleBack}
            style={{marginRight: 2}}
          />
        </Box>
      </TouchableOpacity>
      <CustomText font="wotfardMedium" size={'lg'} color="white">
        {title}
      </CustomText>
      <Box>
        <CustomIcon
          icon="settings"
          size="xs"
          color="white"
          onPress={() => {}}
        />
      </Box>
    </Row>
  );
};

const Box: FC<PropsWithChildren> = ({children}) => (
  <Row className="flex relative p-2 bg-[#f2f2f25d] rounded-full">
    {children}
  </Row>
);
