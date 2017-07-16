import { connect } from 'react-redux'
import { billClicked } from '../actions/ListContainer'
import { billsFetchData } from '../actions/ListContainer'
import Bills from '../components/Bills'

const getBillId = (state) => {
  return state.billId.id
}

const mapStateToProps = (state) => {
  return {
    billid: getBillId(state),
    bills: state.bills,
    isLoading: state.billsIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(billsFetchData(url)),
    onBillClick: (id, state) => dispatch(billClicked(id, state))
  }
}

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Bills);

export default ListContainer