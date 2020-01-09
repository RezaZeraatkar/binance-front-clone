import { connect } from 'react-redux';
import ProductsList from './ProductsList';

function mapStateToProps (state) {
  return { ...state };
}

function mapDispatchToProps (dispatch) {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
