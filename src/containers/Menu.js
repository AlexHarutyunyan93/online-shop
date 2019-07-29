import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import TopHeader from '../components/Header/Top/Top';

const mapStarteToProps = ({ cart }) => ({
    isReady: cart.isReady,
    count: cart.items.length
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions,dispatch)
});

export default connect(mapStarteToProps, mapDispatchToProps)(TopHeader);
