
// action types
const LOAD_BOOKS = 'LOAD_BOOKS';

// default state
import defaultBooks from '../data.json';

// action creators
const loadBooks = (books) => ({
  type: LOAD_BOOKS,
  books,
});

//thunks here

// reducer
export default function (state = defaultBooks, action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.books;
    default:
      return state;
  }
}
