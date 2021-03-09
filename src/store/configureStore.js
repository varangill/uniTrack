import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import entriesReducer from '../reducers/entries';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
  );

  return store;
};
