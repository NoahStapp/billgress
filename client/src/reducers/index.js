import { combineReducers } from 'redux';
import { pageState, billId, billsIsLoading, bills } from './ListContainer';
import {billDetailIsLoading, billDetail } from './DetailContainer'
import {filterState} from './FilterContainer';

export default combineReducers({
    pageState,
    billId,
    billsIsLoading,
    bills,
    billDetail,
    billDetailIsLoading,
    filterState
});