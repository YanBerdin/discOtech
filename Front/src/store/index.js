import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(),
);

const store = createStore(reducer, enhancers);

export default store;
