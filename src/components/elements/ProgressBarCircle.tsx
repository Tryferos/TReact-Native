import * as Progress from 'react-native-progress';
import {AppColors} from '../../constants/values';
import {FC} from 'react';

type ProgressBarProps = {
  progress: number;
  size?: number;
};

export const ProgressBarCircle: FC<ProgressBarProps> = ({
  progress,
  size = 40,
}) => {
  return (
    <Progress.Circle
      animated
      progress={Math.min(1, progress)}
      size={size}
      borderColor={AppColors.transparent}
      color={AppColors.main}
      unfilledColor={AppColors['gray200']}
    />
  );
};
