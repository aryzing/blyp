import * as actions from '../actions'
import { connect } from 'react-redux';
import Product from '../components/Product3.jsx'

const mapStateToProps = (state, ownProps) => {
  const { sku } = ownProps;
  return {
    product: state.auth.business.products[sku]
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { sku } = ownProps;
  return {
    incrementItem: () => {
      dispatch(actions.basketIncreaseCount(sku));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
