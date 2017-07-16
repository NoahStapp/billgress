import { combineReducers } from 'redux';
import { pageState, billId, billsIsLoading, bills } from './ListContainer';
import {billDetailIsLoading, billDetail } from './DetailContainer'

export default combineReducers({
    pageState,
    billId,
    billsIsLoading,
    bills,
    billDetail,
    billDetailIsLoading
});