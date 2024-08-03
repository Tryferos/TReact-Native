import {View} from 'react-native';
import {AppSpace, SpaceType} from '../../constants/values';
import {FC} from 'react';

type SpacerProps = {
  size?: SpaceType;
};

export const Spacer: FC<SpacerProps> = ({size = 'xl'}) => {
  return (
    <View
      style={{
        height: AppSpace[size],
        width: '100%',
        backgroundColor: 'transparent',
      }}
    />
  );
};
