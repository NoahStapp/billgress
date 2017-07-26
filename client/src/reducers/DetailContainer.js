import {
  BILLDETAIL_IS_LOADING,
  BILLDETAIL_FETCH_DATA_SUCCESS
} from '../actions/DetailContainer'

export function billDetailIsLoading(state = false, action) {
    switch (action.type) {
        case BILLDETAIL_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function billDetail(state = [], action) {
    switch (action.type) {
        case BILLDETAIL_FETCH_DATA_SUCCESS:
            return action.bill;
        default:
            return state;
    }
}

export function billDetailId(state = {id: 'hres443-115'}, action) {
  switch (action.type) {
    case BILLDETAIL_IS_LOADING:
      return {
        id: action.id,
      }
    default:
      return state;
  }
}