import booksToLoad from '../data.json';

// action types
const LOAD_BOOKS = 'LOAD_BOOKS';

// default state
const defaultBooks = [];

// action creators
const loadBooks = (books) => ({
  type: LOAD_BOOKS,
  books,
});

// thunks
// this is a fake thunk. We could just have set the initial state to booksToLoad
// I'm sort of mocking what I would do if this were an axios request,
// since that's a more realistic use case than loading data from json
export const fetchBooks = () =>
  dispatch =>
    dispatch(loadBooks(booksToLoad));

// reducer
export default function (state = defaultBooks, action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.books;
    default:
      return state;
  }
}
