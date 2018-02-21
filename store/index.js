import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import books from './books';
import tabs from './tabs';

const reducer = combineReducers({
  books,
  tabs,
});
const middleware = composeWithDevTools(applyMiddleware(
  createLogger({ collapsed: true })
));

const store = createStore(reducer, middleware);

export default store;
export * from './books';
export * from './tabs';

