import { connect } from 'react-redux'
import { billDetailFetchData } from '../actions/DetailContainer'
import BillDetail from '../components/BillDetail'

const getBillId = (state) => {
  return state.billId.id
}

const mapStateToProps = (state) => {
  return {
    billid: getBillId(state),
    bill: state.billDetail,
    isLoading: state.billDetailIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(billDetailFetchData(url))
  }
}

const DetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BillDetail);

export default DetailContainer