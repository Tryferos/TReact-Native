import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {FC} from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import React from 'react';
import {MainNavigatorScreenNames, screenOptions} from '../constants/navigation';

const Stack = createStackNavigator();

const MainNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={MainNavigatorScreenNames.Main_Home}
      screenOptions={screenOptions}>
      <Stack.Screen
        options={{title: 'My home'}}
        name={MainNavigatorScreenNames.Main_Home}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
