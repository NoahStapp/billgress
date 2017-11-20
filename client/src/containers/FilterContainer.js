import { connect } from 'react-redux'
import { buttonClicked } from '../actions/FilterContainer'
import FilterButtons from '../components/Filter/FilterButtons'

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: (state) => {
      dispatch(buttonClicked(state))
    }
  };
};

const FilterContainer = connect(
    null,
    mapDispatchToProps
)(FilterButtons);

export default FilterContainer;