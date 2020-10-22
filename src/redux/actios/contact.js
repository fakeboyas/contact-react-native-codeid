import {GET_CONTACTS} from './types';

export const addContact = (formData) => async (dispatch) => {
  try {
    const url = `https://simple-contact-crud.herokuapp.com/contact`;
    const options = {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json',
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getContacts = () => {
  return async (dispatch, getState) => {
    let url = `https://simple-contact-crud.herokuapp.com/contact`;

    let options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    };

    let response = await fetch(url, options);
    let results = await response.json();

    dispatch({
      type: GET_CONTACTS,
      payload: results,
    });
  };
};
