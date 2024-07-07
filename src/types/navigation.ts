import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationParamList} from '../constants.ts/navigation';

export const useAppNavigation = () => {
  return useNavigation<
    StackNavigationProp<NavigationParamList, keyof NavigationParamList>
  >();
};
