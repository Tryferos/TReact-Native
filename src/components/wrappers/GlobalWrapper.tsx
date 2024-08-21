import {FC, PropsWithChildren, useEffect} from 'react';
import {useNetWorkInfo} from '../../store/netinfo';
import {useUserSettings} from '../../store/settings';
import {AppAlerts} from '../AppAlerts/AppAlerts';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useUserAuthentication} from '../../store/authentication';
import {Loader} from '../elements/Loader';
import {useNutritionPresets} from '../../store/nutrition_presets';

export const GlobalWrapper: FC<PropsWithChildren> = ({children}) => {
  const {isConnected, listen, unsubscribe} = useNetWorkInfo();
  const {init} = useUserSettings();
  const {init: initAuthentication} = useUserAuthentication();
  const {init: initPresets} = useNutritionPresets();
  useEffect(() => {
    listen();
    const unsubscribeAuth = initAuthentication();
    (async () => {
      await init();
      await initPresets();
    })();
    return () => {
      unsubscribe();
      unsubscribeAuth();
    };
  }, []);
  return (
    //* {children} must be the first component of the wrapper
    //* the later a component is added, the more z-index it has
    <>
      {children}
      <Loader />
      <AppAlerts />
    </>
  );
};
