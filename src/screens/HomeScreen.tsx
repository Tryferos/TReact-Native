import {FC, useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenWrapper} from '../components/wrappers/screen';
import {useBearStore} from '../store/test';

export const HomeScreen: FC = () => {
  const {bears, increasePopulation} = useBearStore(state => state);

  const handlePress = () => {
    increasePopulation();
  };
  return (
    <ScreenWrapper title="Home Screen">
      <Button title="click me" onPress={handlePress} />
      <Text>{bears}</Text>
    </ScreenWrapper>
  );
};
