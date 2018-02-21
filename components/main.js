import React from 'react'
import { connect } from 'react-redux'
import TabContainer from './TabContainer'
import { fetchBooks } from '../store'

 class Main extends React.Component {

  render() {
    return (
      <React.Fragment>
        <nav>
          <TabContainer />
        </nav>
        {
          //<ProductList />
        }
        <footer>
          © Company 2018
        </footer>
      </React.Fragment>
    )
  }
}


export default Main;
