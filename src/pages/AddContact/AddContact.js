import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {ActionSheet, Root} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

function AddContact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    photo: '',
  });

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
  };

  const onClickAddPicture = () => {
    const BUTTONS = ['Take Photo', 'Choose from Library', 'Cancel'];
    ActionSheet.show(
      {options: BUTTONS, cancelButtonIndex: 2, title: 'Select a Photo'},
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            takePhotoFromCamera();
            break;
          case 1:
            choosePhotoFromLibrary();
            break;
          default:
        }
      },
    );
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      // cropping: false,
      // includeBase64: true,
      // compressImageMaxWidth: 500,
      // compressImageMaxHeight: 500,
      // compressImageQuality: 0.7
    })
      .then((image) => {
        console.log('Choose Photo Object: ', image);
        this.onSelectedImage(image);
      })
      .catch((error) => console.log('Choose Photo Error: ', error));
  };

  return (
    <Root>
      <View style={styles.container}>
        <View style={styles.buttonPhotoContainer}>
          <TouchableOpacity style={styles.buttonPhoto}>
            <Icon
              name="camera"
              size={40}
              color="white"
              onPress={() => onClickAddPicture()}
            />
          </TouchableOpacity>
          <Text>Tambah Foto</Text>
        </View>
        <View style={styles.inputText}>
          <Text style={styles.label}>Nama Depan</Text>
          <Input
            placeholder="Masukan Nama Depan"
            leftIcon={<Icon name="user" size={20} color="black" />}
          />
        </View>
        <View style={styles.inputText}>
          <Text style={styles.label}>Nama Belakang</Text>
          <Input
            placeholder="Masukan Nama Belakang"
            leftIcon={<Icon name="user" size={20} color="black" />}
          />
        </View>
        <View style={styles.inputText}>
          <Text style={styles.label}>Umur</Text>
          <Input
            placeholder="Masukan Umur"
            leftIcon={<Icon name="calendar" size={20} color="black" />}
          />
        </View>
        <View style={styles.buttonAddContainer}>
          <View style={styles.buttonAdd}>
            <Button title="Simpan" />
          </View>
        </View>
      </View>
    </Root>
  );
}

export default AddContact;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  buttonPhotoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  buttonPhoto: {
    width: 70,
    height: 70,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  inputText: {},
  label: {marginLeft: 10},
  buttonAdd: {
    width: 200,
    height: 20,
  },
  buttonAddContainer: {
    display: 'flex',
    alignItems: 'center',
  },
});
