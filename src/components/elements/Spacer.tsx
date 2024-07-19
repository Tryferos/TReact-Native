import {View} from 'react-native';
import {AppBoxSize, BoxSizeType} from '../../constants/values';
import {FC} from 'react';

type SpacerProps = {
  size?: BoxSizeType;
};

export const Spacer: FC<SpacerProps> = ({size = 'xl'}) => {
  return (
    <View
      style={{
        height: AppBoxSize[size],
        width: '100%',
        backgroundColor: 'transparent',
      }}
    />
  );
};
