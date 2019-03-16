import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

const enhancer = applyMiddleware(
  promiseMiddleware(),
  thunkMiddleware,
  loggerMiddleware
);

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
