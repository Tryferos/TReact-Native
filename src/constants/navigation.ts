import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';

export type NavigationParamList = {
  [key in keyof typeof MainNavigatorScreenNames]: undefined;
};

export const MainNavigatorScreenNames = {
  Main_Home: 'Main_Home',
} as const;

export const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
