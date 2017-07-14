import React, { Component } from 'react';
import BillsContainer from '../containers/ListContainer.js'
import BillDetail from './BillDetail.js'
import renderIf from 'render-if';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {pageStatus: 'showList'}
  }
  render() {
      const showList = renderIf(this.state.pageStatus === 'showList');
      const showDetail = renderIf(this.state.pageStatus === 'showDetail');
    return (
      <div className="Home">
        <div className="Header col-sm-12">
          <h1>Billgress</h1>
          <h3>Hourly updates on bills in Congress</h3>
        </div>
        {showList(
            <BillsContainer />
        )}
        {showDetail(
            <BillDetail></BillDetail>
        )}
      </div>
    );
  }
}

export default Home;