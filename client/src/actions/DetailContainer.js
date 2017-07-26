export const BILLDETAIL_FETCH_DATA_SUCCESS = 'BILLDETAIL_FETCH_DATA_SUCCESS'
export const BILLDETAIL_IS_LOADING = 'BILLDETAIL_IS_LOADING'

export function billDetailFetchDataSuccess(bill) {
    return {
        type: 'BILLDETAIL_FETCH_DATA_SUCCESS',
        bill
    }
}

export function billDetailIsLoading(bool) {
    return {
        type: 'BILLDETAIL_IS_LOADING',
        isLoading: bool
    };
}

export function billDetailFetchData() {
    return (dispatch, getState) => {
        dispatch(billDetailIsLoading(true));
        const {id} = getState().billId;
        fetch('/api/bill/'+id)
            .then((response) => {
                dispatch(billDetailIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((bill) => dispatch(billDetailFetchDataSuccess(bill)))
    }
}