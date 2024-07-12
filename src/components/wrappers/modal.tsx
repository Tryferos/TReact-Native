import React, {FC} from 'react';
import ReactNativeModal from 'react-native-modal';
import {Column} from '../elements/Column';
import {Dimensions, Platform, Text, TouchableOpacity, View} from 'react-native';
import {Row} from '../elements/Row';
import {SVGImage} from '../elements/Image';
import CloseIcon from '../../../icons/close.svg';
import {Divider} from '../../components/elements/Divider';

type ModalProps = {
  children: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
} & ModalHeaderProps;

type ModalHeaderProps = {
  title: string;
  showCloseIcon?: boolean;
};

export const Modal: FC<ModalProps> = ({
  children,
  isVisible,
  onClose,
  title,
  showCloseIcon = true,
}) => {
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight =
    Platform.OS === 'ios'
      ? Dimensions.get('window').height
      : require('react-native-extra-dimensions-android').get(
          'REAL_WINDOW_HEIGHT',
        );

  return (
    <ReactNativeModal
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}
      isVisible={isVisible}
      className="bg-white absolute bottom-0 left-0 m-0 w-[100vw] rounded-t-3xl"
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <Column
        style={{flex: 1}}
        className="min-h-[120px] px-4 pb-6 pt-4 w-[100%]">
        {showCloseIcon && <ModalHeader title={title} onClose={onClose} />}
        <Divider />
        {children}
      </Column>
    </ReactNativeModal>
  );
};

const ModalHeader: FC<ModalHeaderProps & Pick<ModalProps, 'onClose'>> = ({
  title,
  onClose,
}) => {
  return (
    <Row className="items-center justify-between border-divider">
      <View />
      <Text className="text-xl font-medium text-black">{title}</Text>
      <SVGImage svg={CloseIcon} size={20} strokeWidth={10} onPress={onClose} />
    </Row>
  );
};
