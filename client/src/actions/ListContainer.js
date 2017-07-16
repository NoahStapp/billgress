export const BILL_CLICKED = 'BILL_CLICKED'
export const BILLS_IS_LOADING = 'BILLS_IS_LOADING'
export const BILLS_FETCH_DATA_SUCCESS = 'BILLS_FETCH_DATA_SUCCESS'

export const PageState = {
    SHOW_LIST: 'SHOW_LIST',
    SHOW_DETAIL: 'SHOW_DETAIL'
}

export function billClicked(id, state) {
    return {
        type: 'BILL_CLICKED',
        id,
        state
    }
}

export function billsIsLoading(bool) {
    return {
        type: 'BILLS_IS_LOADING',
        isLoading: bool
    };
}

export function billsFetchDataSuccess(bills) {
    return {
        type: 'BILLS_FETCH_DATA_SUCCESS',
        bills
    }
}

export function billsFetchData() {
    return (dispatch) => {
        dispatch(billsIsLoading(true));
        fetch('/api/recent')
            .then((response) => {
                dispatch(billsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((bills) => dispatch(billsFetchDataSuccess(bills)))
    }
}
