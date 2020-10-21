/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './src/components/Header/Header';
import ListContact from './src/components/ListContacts/ListContact';
import AddIcon from './src/components/Button/AddIcon';

import {} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Header />
        </View>
        <ScrollView style={styles.container}>
          <ListContact />
          <ListContact />
          <ListContact />
          <ListContact />
          <ListContact />
          <ListContact />
          <ListContact />
          <ListContact />
          <ListContact />
          <ListContact />
          <ListContact />
          <ListContact />
          <ListContact />
          <ListContact />
          <ListContact />
          <ListContact />
          <ListContact />
        </ScrollView>
        <View>
          <AddIcon />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 0,
  },
});

export default App;
