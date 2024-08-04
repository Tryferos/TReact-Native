import {FC} from 'react';
import {TextInput} from 'react-native';
import {AppBorderRadius, AppColors} from '../../constants/values';
import {Row} from './Row';
import {CustomIcon} from './CustomIcon';
import {AppIconsType} from '../../types/icons';

type CustomInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  icon?: AppIconsType;
  onIconPress?: () => void;
};

export const CustomInput: FC<CustomInputProps> = ({
  onChangeText,
  placeholder,
  value,
  icon,
  onIconPress,
}) => {
  return (
    <Row
      style={{
        borderWidth: 0,
        borderRadius: AppBorderRadius.normal,
      }}
      className="py-2 px-2 items-center"
      backgroundColor="white">
      {icon ? (
        <CustomIcon icon={icon} size="md" color="gray" onPress={onIconPress} />
      ) : null}
      <TextInput
        style={{
          flexBasis: !icon ? '100%' : '85%',
          display: 'flex',
          textAlignVertical: 'top',
          textAlign: 'center',
          fontFamily: 'wotfard-regular-webfont',
        }}
        underlineColorAndroid={AppColors.transparent}
        multiline={true}
        placeholderTextColor={AppColors.gray + '88'}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </Row>
  );
};
