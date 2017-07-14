import React, { Component } from 'react';
import PropTypes from 'prop-types'

import BillItem from './BillItem.js'

class Bills extends Component {
  constructor(props) {
    super(props)
    this.state = {bills: []}
  }
  componentDidMount() {
    fetch('/api/recent')
    .then(response => response.json())
    .then(response => {
      this.setState({
        bills: response
      });
    });
  };

  render() {
    const items = this.state.bills.map(item => 
      <BillItem key={item.bill_id} bill={item} onClick={() => this.props.onBillClick(item.bill_id)}/>
      );
    return (
      <div>
        {items}
      </div>
    );
  }
};

Bills.propTypes = {
  onBillClick: PropTypes.func.isRequired
}

export default Bills;