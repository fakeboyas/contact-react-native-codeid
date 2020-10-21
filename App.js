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
import AddContactButton from './src/components/Button/AddContactButton';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View>
          <Header />
        </View>
        <ScrollView style={styles.item}>
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

        <AddContactButton />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    margin: 20,
    marginTop: 0,
  },
});

export default App;
