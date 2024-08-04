import {FC, PropsWithChildren, useEffect} from 'react';
import {useNetWorkInfo} from '../../store/netinfo';
import {useUserSettings} from '../../store/settings';
import {AppAlerts} from '../AppAlerts/AppAlerts';

export const GlobalWrapper: FC<PropsWithChildren> = ({children}) => {
  const {isConnected, listen, unsubscribe} = useNetWorkInfo();
  const {init} = useUserSettings();
  useEffect(() => {
    listen();
    (async () => {
      init();
    })();
    return unsubscribe;
  }, []);
  return (
    //* {children} must be the first component of the wrapper
    //* the later a component is added, the more z-index it has
    <>
      {children}
      <AppAlerts />
    </>
  );
};
