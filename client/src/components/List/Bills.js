import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BillItem from './BillItem.js'

class Bills extends Component {
  componentDidMount() {
    this.props.fetchData();
  };

  render() {
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    const items = this.props.bills.map(item => 
      <BillItem key={item.bill_id} bill={item} onClick={() => this.props.onBillClick(item.bill_id, 'SHOW_DETAIL')}/>
      );
    return (
      <div>
        {items}
      </div>
    );
  }
};

Bills.propTypes = {
  onBillClick: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  bills: PropTypes.array.isRequired
}

export default Bills;