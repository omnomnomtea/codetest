import React from 'react'
import { connect } from 'react-redux'
import { setTab } from '../store'


export class TabContainer extends React.Component {

  render() {
    // these tabs should come from the state but I'm running out of time
    // so I'm hardcoding a bit
    return (
      <div className="Tab-container">
        <div className={`tab ${this.props.tab === 0 ? "active" : "inactive"}`} onClick={()=>this.props.changeTab(0)}>
          All Products
      </div>
        <div className={`tab ${this.props.tab === 1 ? "active" : "inactive"}`} onClick={()=>this.props.changeTab(1)}>
          Best Picture Books
      </div>
        <div className={`tab ${this.props.tab === 2 ? "active" : "inactive"}`} onClick={()=>this.props.changeTab(2)}>
          Books (Ages 3-5)
      </div>
      </div>
    )
  }

}

const mapState = (state) => ({ tab: state.tabs });

const mapDispatch = (dispatch) => ({
  changeTab: (num) => dispatch(setTab(num))
})

export default connect(mapState, mapDispatch)(TabContainer)
