import React, { Component } from 'react';
import BillDetailInfo from './BillDetailInfo';
import BillDetailMembers from './BillDetailMembers';
import BillDetailVotes from './BillDetailVotes';


class BillDetailItem extends Component {
     render() {
        console.log(this.props.bill)
        return (
            <div className="BillDetailItem">
                <BillDetailInfo info={this.props.bill}/>
            </div>
        );
    };
}

export default BillDetailItem;