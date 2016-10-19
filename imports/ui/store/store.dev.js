import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/';

export default function Store() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, createLogger())
    )
  );

  return store;
}
