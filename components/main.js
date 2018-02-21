import React from 'react'
import { connect } from 'react-redux'
import TabContainer from './TabContainer'
import ProductList from './ProductList'
import { fetchBooks } from '../store'

const Main = (props) => {
  return (
    <div className="main">
      <nav>
        <img src="/images/logo.png" />
        <TabContainer />
      </nav>
      <ProductList products={props.currentBooks} />
      <footer>
        © Company 2018
        </footer>
    </div>
  )
}



const mapState = (state) => {

  let currentBooks = state.books;
  if (state.tabs !== 0) { //if we want a specific category
    currentBooks = state.books[state.tabs - 1].products;
  }
  else { // if we need to join all categories into one
    const totalBooks = currentBooks.map(bookList => bookList.products);
    const newTotalBooks = [...totalBooks[0], ...totalBooks[1]] //refactor if time

    currentBooks = newTotalBooks.reduce((acc, book) => {
      if (!acc.find(bookAlreadyInList => bookAlreadyInList.id === book.id)) {
        acc.push(book);
      }
      return acc;
    }, []);
  }

  // if I had time, I'd have sort-order on the state like I have tabs, and I would
  // sort based on that criteria here

  return {
    currentBooks,
  }
};

export default connect(mapState)(Main)
