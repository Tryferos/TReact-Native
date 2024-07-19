import {FC} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {Row} from '../elements/Row';
import {CustomText} from '../elements/CustomText';
import {AppBoxSize} from '../../constants/values';

type RoundButtonProps = {
  onPress?: () => void;
  text: string;
  style?: ViewStyle;
};

export const RoundButton: FC<RoundButtonProps> = ({onPress, text, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{flex: 1}}>
      <Row
        style={{width: '100%', paddingVertical: AppBoxSize.xs, ...style}}
        className="px-6 rounded-xl justify-center items-center"
        backgroundColor="main">
        <CustomText
          onPress={onPress}
          color="white"
          font="wotfardMedium"
          size="md">
          {text}
        </CustomText>
      </Row>
    </TouchableOpacity>
  );
};
