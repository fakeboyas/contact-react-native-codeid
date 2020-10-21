import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function Search() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.icon}>
            <Icon name="bars" size={30} color="black" />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput} placeholder="Cari Kontak" />
          </View>
        </View>
      </View>
    </>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    display: 'flex',
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    width: '75%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    height: '70%',
    fontSize: 16,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 60,
    borderWidth: 1,
    width: '100%',
    borderColor: 'grey',
    borderRadius: 3,
  },
});
