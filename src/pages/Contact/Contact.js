import React, {useEffect} from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import Search from '../../components/Search/Search';
import ListContact from '../../components/ListContacts/ListContact';
import AddButton from '../../components/Button/AddContactButton';
import {useDispatch, useSelector} from 'react-redux';
import {getContacts} from '../../redux/actios';

function Contact({navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Search />
        </View>
        <ScrollView style={styles.listContact}>
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
        <AddButton navigation={{navigation}} />
      </SafeAreaView>
    </>
  );
}

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  listContact: {
    margin: 20,
    marginTop: 0,
  },
});
