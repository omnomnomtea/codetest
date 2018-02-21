import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import books from './books';
import tabs from './tabs';

const reducer = combineReducers({
  books,
  tabs,
});

const store = createStore(reducer);

export default store;
export * from './books';
export * from './tabs';

