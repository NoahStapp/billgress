import React, { Component } from 'react';

class BillDetailItem extends Component {
     render() {
        return (
            <div className="BillDetailItem col-sm-12">
                <h1 className="bill-detail-title">{this.props.bill.title}</h1>
                <h2 className="bill-detail-number">{this.props.bill.number}</h2>
                <h4 className="bill-detail-sponsor">{this.props.bill.sponsor}</h4>
                <h4 className="bill-detail-sponsor-party">{this.props.bill.sponsor_party}</h4>
                <h4 className="bill-detail-text-link"><a href={this.props.bill.congressdotgov_url}>Offical Congress.gov page</a></h4>
                <h4 className="bill-detail-introduced">{this.props.bill.introduced_date}</h4>
                <h4 className="bill-detail-summary">{this.props.bill.summary}</h4>
                <h4 className="latest-detail-action">{this.props.bill.latest_major_action}</h4>
                <h4 className="bill-detail-subject">{this.props.bill.primary_subject}</h4>
                <h4 className="bill-detail-votes">{this.props.bill.votes}</h4>
            </div>
        );
    };
}

export default BillDetailItem;