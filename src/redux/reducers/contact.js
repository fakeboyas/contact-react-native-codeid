import {GET_CONTACTS} from '../actios';

const initialState = {
  contacts: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};
