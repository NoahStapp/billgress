import { combineReducers } from 'redux';
import { pageState, billId, billsIsLoading, bills } from './ListContainer.js';

export default combineReducers({
    pageState,
    billId,
    billsIsLoading,
    bills
});