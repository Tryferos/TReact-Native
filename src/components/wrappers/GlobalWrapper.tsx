import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useNetWorkInfo} from '../../store/netinfo';
import {useUserSettings} from '../../store/settings';
import {AppAlerts} from '../AppAlerts/AppAlerts';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useUserAuthentication} from '../../store/authentication';
import {Loader} from '../elements/Loader';
import {useNutritionPresets} from '../../store/nutrition_presets';
import {useAppNavigation, useAppRoute} from '../../types/navigation';
import {MainNavigatorScreenNames} from '../../constants/navigation';
import {Modal} from 'react-native';
import {NoConnectionModalBody} from './NoConnectionModal';

export const GlobalWrapper: FC<PropsWithChildren> = ({children}) => {
  const navigation = useAppNavigation();
  const {isConnected, listen, unsubscribe} = useNetWorkInfo();
  const {init} = useUserSettings();
  const {init: initAuthentication, user} = useUserAuthentication();
  const {init: initPresets} = useNutritionPresets();
  const [hasInitialized, setHasInitialized] = useState(false);

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
      <Modal visible={!isConnected && hasInitialized}>
        <NoConnectionModalBody />
      </Modal>
      <AppAlerts />
      <Loader />
    </>
  );
};
