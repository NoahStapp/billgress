import { connect } from 'react-redux'
import { addBillId } from '../actions/actions'
import { billsFetchData } from '../actions/ListContainer'
import Bills from '../components/Bills'

const getBillId = (state) => {
  return state.billid.id
}

const mapStateToProps = state => {
  return {
    billid: getBillId(state),
    bills: state.bills,
    isLoading: state.billsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch(billsFetchData(url))
  }
}

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    {onBillClick: addBillId}
)(Bills)

export default ListContainer