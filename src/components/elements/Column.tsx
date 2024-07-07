import {FC, PropsWithChildren} from 'react';
import {View, ViewProps} from 'react-native';

export const Column: FC<ViewProps> = props => {
  return (
    <View {...props} className="flex flex-col">
      {props.children}
    </View>
  );
};
