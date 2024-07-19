import {FC, PropsWithChildren, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNetWorkInfo} from '../../store/netinfo';
import {useUserSettings} from '../../store/settings';

export const GlobalWrapper: FC<PropsWithChildren> = ({children}) => {
  const {isConnected, listen, unsubscribe} = useNetWorkInfo();
  const {theme, language, init, setTheme, setLanguage} = useUserSettings();
  useEffect(() => {
    listen();
    (async () => {
      init();
    })();
    return unsubscribe;
  }, []);
  return <>{children}</>;
};
