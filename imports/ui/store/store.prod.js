import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export default function Store() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk)
    )
  );

  return store;
}
