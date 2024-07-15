import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainNavigatorScreenNames} from '../constants/navigation';

export const useAppNavigation = () => {
  return useNavigation<
    StackNavigationProp<NavigationParamList, keyof NavigationParamList>
  >();
};

export const useAppRoute = <T extends keyof NavigationParamList>() => {
  return useRoute<RouteProp<NavigationParamList, T>>();
};

export const useAppRouteParams = <T extends keyof NavigationParamList>() => {
  return useAppRoute<T>().params!;
};

export type NavigationParamList = {
  [MainNavigatorScreenNames.Main_Home]: undefined;
};

export type ProductScreenType = {
  code: number;
};
