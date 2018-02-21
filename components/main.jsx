import React from 'react'
import { connect } from 'react-redux'
import { TabContainer } from './index'
import { fetchBooks } from '../store'

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <TabContainer />
        </nav>
        <ProductList />
        <footer>
          © Company 2018
        </footer>
      </React.Fragment>
    )
  }
}

const mapDispatch = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
});

export default connect(null, mapDispatch)(Main)
