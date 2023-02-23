/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import Home from './Screens/Home';
import {ColorProvider} from './Context/ColorContext';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ColorProvider>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>Prueba Básica</Text>
            <Home />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ColorProvider>
  );
}

export default App;
