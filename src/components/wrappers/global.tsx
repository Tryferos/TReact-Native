import {FC, PropsWithChildren} from 'react';
import {View, Text} from 'react-native';

export const GlobalWrapper: FC<PropsWithChildren> = ({children}) => {
  return <>{children}</>;
};
