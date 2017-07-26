import React, { Component } from 'react';

class BillDetailInfo extends Component {
     render() {
        return (
            <div className="BillDetailInfo col-sm-8 col-xs-12">
                <h1 className="info-detail-title">{this.props.info.title}</h1>
                <h2 className="info-detail-number">{this.props.info.number}</h2>
                <h4 className="info-detail-text-link"><a href={this.props.info.congressdotgov_url}>Offical Congress.gov page</a></h4>
                <h4 className="info-detail-introduced">{this.props.info.introduced_date}</h4>
                <h4 className="info-detail-summary">{this.props.info.summary}</h4>
                <h4 className="latest-detail-action">{this.props.info.latest_major_action}</h4>
                <h4 className="info-detail-subject">{this.props.info.primary_subject}</h4>
            </div>
        );
    };
}

export default BillDetailInfo;              
