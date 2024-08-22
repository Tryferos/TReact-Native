import * as Progress from 'react-native-progress';
import {AppColors} from '../../constants/values';
import {FC} from 'react';
import {Dimensions} from 'react-native';

type ProgressBarProps = {
  progress: number;
  size?: number;
  widthFactor?: number;
};

export const ProgressBar: FC<ProgressBarProps> = ({
  progress,
  size = 40,
  widthFactor = 1,
}) => {
  return (
    <Progress.Bar
      animated
      progress={Math.min(1, progress)}
      borderColor={AppColors.transparent}
      color={AppColors.main}
      width={Dimensions.get('window').width * widthFactor}
      unfilledColor={AppColors['gray200']}
    />
  );
};
