import React, { Component } from 'react';
import PropTypes from 'prop-types'

import BillDetailItem from './BillDetailItem.js'

class BillDetail extends Component {
    componentDidMount() {
        this.props.fetchData();
    };
    render() {
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    const item = this.props.bill.map(item => 
      <BillDetailItem key={item.bill_id} bill={item}/>
      );
    return (
      <div>
        {item}
      </div>
    );
  }
};

BillDetail.propTypes = {
  fetchData: PropTypes.func.isRequired,
  bill: PropTypes.array.isRequired
}

export default BillDetail;