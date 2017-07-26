import {
  BUTTON_CLICKED,
  FilterState,
} from '../actions/FilterContainer';
const { FILTER_HOUSE } = FilterState;

export function filterState(state = FILTER_HOUSE, action) {
  switch (action.type) {
    case BUTTON_CLICKED:
      return action.state
    default:
      return state
  }
}


