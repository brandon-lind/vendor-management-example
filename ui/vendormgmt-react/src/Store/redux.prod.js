import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './Reducers';

const enhancer = applyMiddleware(thunkMiddleware, promiseMiddleware());

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
