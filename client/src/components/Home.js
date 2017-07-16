import React, { Component } from 'react';
import ListContainer from '../containers/ListContainer.js'
import DetailContainer from '../containers/DetailContainer.js'
import renderIf from 'render-if';
import PropTypes from 'prop-types'

class Home extends Component {
  render() {
      const showList = renderIf(this.props.pageState === 'SHOW_LIST');
      const showDetail = renderIf(this.props.pageState === 'SHOW_DETAIL');
    return (  
      <div className="Home">
        <div className="Header col-sm-12">
          <h1>Billgress</h1>
          <h3>Hourly updates on bills in Congress</h3>
        </div>
        {showList(
            <ListContainer />
        )}
        {showDetail(
            <DetailContainer />
        )}
      </div>
    );
  }
}


Home.propTypes = {
  pageState: PropTypes.string.isRequired
}

export default Home;