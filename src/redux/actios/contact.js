import {API_URL} from '@env';

export const addContact = (formData) => async (dispatch) => {
  try {
    const url = `${API_URL}contact`;
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
