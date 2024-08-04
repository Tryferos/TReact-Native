import {TouchableOpacity} from 'react-native-gesture-handler';
import {Row} from './Row';
import {FC} from 'react';
import {CustomIcon} from './CustomIcon';
import {AppBorderRadius} from '../../constants/values';

type CustomCheckboxProps = {
  checked: boolean;
  onPress: () => void;
};

export const CustomCheckbox: FC<CustomCheckboxProps> = ({checked, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Row
        backgroundColor={checked ? 'main' : 'transparent'}
        style={{borderRadius: AppBorderRadius.small, padding: checked ? 2 : 0}}>
        <CustomIcon
          icon="check"
          color={checked ? 'white' : 'main'}
          size={checked ? 'xs' : 'sm'}
        />
      </Row>
    </TouchableOpacity>
  );
};
