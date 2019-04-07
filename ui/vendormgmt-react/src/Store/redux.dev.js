import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './Reducers';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

const enhancer = applyMiddleware(thunkMiddleware, loggerMiddleware);

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
