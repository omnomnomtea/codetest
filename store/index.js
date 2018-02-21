import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import books from './books';

const reducer = combineReducers({
  books,
});
const middleware = composeWithDevTools(applyMiddleware(
  createLogger({ collapsed: true })
));

const store = createStore(reducer, middleware);

export default store;
export * from './books';

