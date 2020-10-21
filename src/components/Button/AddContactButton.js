import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';

function AddContactButton() {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}>
      <Icon name="pluscircle" size={60} color="purple" />
    </TouchableOpacity>
  );
}

export default AddContactButton;

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
});
