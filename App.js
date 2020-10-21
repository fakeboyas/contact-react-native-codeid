/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Contact from './src/pages/Contact/Contact';
import AddContact from './src/pages/AddContact/AddContact';

const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Kontak">
          <Stack.Screen name="Kontak" component={Contact} />
          <Stack.Screen name="Buat Kontak" component={AddContact} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
