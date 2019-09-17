import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import Cart from '../components/Main/Cart/Cart';

const mapStarteToProps = ({ cart, lanuage }) => ({
    language: language.language,
    cartItems: cart.items,
    totalPrice: cart.items.reduce((total, dress) => total + dress.price,0),
    removeFromCart: cart.items,
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions,dispatch),
});

export default connect(mapStarteToProps, mapDispatchToProps)(Cart);
