import React from 'react'
import { connect } from 'react-redux'
import TabContainer from './TabContainer'
import ProductList from './ProductList'
import { fetchBooks } from '../store'

class Main extends React.Component {

  render() {
    return (
      <React.Fragment>
        <nav>
          <TabContainer />
        </nav>
        <ProductList products={this.props.currentBooks} />
        <footer>
          © Company 2018
        </footer>
      </React.Fragment>
    )
  }
}



const mapState = (state) => {

  let currentBooks = state.books;
  if (state.tabs !== 0) { //if we want a specific category
    currentBooks = state.books[state.tabs].products;
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

  return {
    currentBooks,
  }
};

export default connect(mapState)(Main)
