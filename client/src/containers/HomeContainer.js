import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  return {
    pageState: state.pageState,
    filterState: state.filterState
  };
};

const HomeContainer = connect(
    mapStateToProps
)(Home);

export default HomeContainer;