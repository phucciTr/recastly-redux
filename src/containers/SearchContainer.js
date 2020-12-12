import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

//TODO: define a SearchContainer componentwhich will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

var mapStateToProps = (state) => {
  return {
    value: state.value
  };
};


var mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (state) => {
      dispatch(handleSearchChange(state.value));
    }
  };
};

var SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
