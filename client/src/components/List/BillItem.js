import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BillItem extends Component {
    render() {
        return (
            <div className="BillItem col-sm-12">
                <h1 className="bill-title">{this.props.bill.title}</h1>
                <h2 className="bill-number">{this.props.bill.number}</h2>
                <h4 className="bill-introduced">{this.props.bill.introduced_date}</h4>
                <h4 className="bill-id" onClick={this.props.onClick}>{this.props.bill.bill_id}</h4>
                <h4 className="latest-action">{this.props.bill.latest_major_action}</h4>
                <h4 className="bill-subject">{this.props.bill.primary_subject}</h4>
            </div>
        );
    };
};

BillItem.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default BillItem;