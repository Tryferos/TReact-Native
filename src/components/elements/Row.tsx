import {FC, PropsWithChildren} from 'react';
import {View, ViewProps} from 'react-native';

export const Row: FC<ViewProps> = props => {
  return (
    <View {...props} className="flex flex-row">
      {props.children}
    </View>
  );
};
