import {
  BILL_CLICKED,
  PageState
} from '../actions/ListContainer'
const { SHOW_LIST } = PageState

export function pageState(state = SHOW_LIST, action) {
  switch (action.type) {
    case BILL_CLICKED:
      return action.state
    default:
      return state
  }
}

export function billId(state = {id: undefined}, action) {
  switch (action.type) {
    case BILL_CLICKED:
      return {
        id: action.id,
      }
    default:
      return state
  }
}

export function billsIsLoading(state = false, action) {
    switch (action.type) {
        case 'BILLS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function bills(state = [], action) {
    switch (action.type) {
        case 'BILLS_FETCH_DATA_SUCCESS':
            return action.bills;
        default:
            return state;
    }
}
