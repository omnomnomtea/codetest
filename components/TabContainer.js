import React from 'react'
import { connect } from 'react-redux'

export class TabContainer extends React.Component {

  render() {
    // these tabs should come from the state but I'm running out of time
    // so I'm hardcoding a bit
    return (
    <div className="Tab-container">
      <div className={`tab ${this.props.tab === 0? "active" : "inactive"}`}>
        All Products
      </div>
      <div className={`tab ${this.props.tab === 1? "active" : "inactive"}`}>
        Best Picture Books
      </div>
      <div className={`tab ${this.props.tab === 2? "active" : "inactive"}`}>
        Books (Ages 3-5)
      </div>
    </div>
    )
  }

}

const mapState = (state) => ({tab: state.tabs});

export default connect(mapState)(TabContainer)
