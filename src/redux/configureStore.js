import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import allReducers from './reducers';

const initialState = {};

const configureStore = () => {
  return createStore(allReducers, initialState, applyMiddleware(thunk));
};

export default configureStore;
