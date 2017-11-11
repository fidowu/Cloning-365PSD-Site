import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

//Uses redux's connect to sprinkle the data in the store 
//into the Main component

function mapStateToProps(state) {
  return {
  	
    gallery: state.gallery,
    statistics: state.statistics,
    allcategories: state.allcategories,
    filtercategory: state.filtercategory,
    filterfavourites : state.filterfavourites,
    filterrating: state.filterrating
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;