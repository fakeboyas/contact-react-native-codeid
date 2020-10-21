import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function ListContact() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.contactIconContainer}>
          <Image
            style={styles.iconContact}
            source={{
              uri:
                'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
            }}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}> Muhamad Sidiq Ilyas </Text>
        </View>
      </View>
    </>
  );
}

export default ListContact;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  contactIconContainer: {
    width: '20%',
  },

  iconContact: {
    width: 50,
    height: 50,
  },

  nameContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
  },
});
