import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import MainNavigator from './src/navigators/MainNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {GlobalWrapper} from './src/components/wrappers/global';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider style={[styles.container]}>
      <GestureHandlerRootView style={[styles.container]}>
        <CustomStatusBar />
        <GlobalWrapper>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </GlobalWrapper>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const CustomStatusBar: FC = () => {
  return (
    <StatusBar
      animated
      backgroundColor="rgba(0,0,0,0)"
      networkActivityIndicatorVisible={true}
      translucent
      barStyle="dark-content"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
