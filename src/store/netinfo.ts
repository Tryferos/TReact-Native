import {
  NetInfoSubscription,
  addEventListener,
} from '@react-native-community/netinfo';
import {create} from 'zustand';

type NetInfoProps = {
  isConnected: boolean;
  subscription: NetInfoSubscription | null;
  listen: () => void;
  unsubscribe: () => void;
};

export const useNetWorkInfo = create<NetInfoProps>()(set => ({
  isConnected: false,
  subscription: null,
  listen: () => {
    const unsubscribe = addEventListener(state => {
      set({isConnected: state.isConnected ?? false});
    });
    set({subscription: unsubscribe});
  },
  unsubscribe: () => {
    set(state => {
      if (!state.subscription) return state;
      state.subscription();
      return {subscription: null};
    });
  },
}));
