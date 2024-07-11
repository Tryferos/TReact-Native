import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationParamList} from '../constants/navigation';

export const useAppNavigation = () => {
  return useNavigation<
    StackNavigationProp<NavigationParamList, keyof NavigationParamList>
  >();
};
