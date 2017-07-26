export const BUTTON_CLICKED = 'BUTTON_CLICKED'

export const FilterState = {
    FILTER_HOUSE: 'house',
    FILTER_SENATE: 'senate',
}

export function buttonClicked(state) {
    return {
        type: 'BUTTON_CLICKED',
        state
    }
}