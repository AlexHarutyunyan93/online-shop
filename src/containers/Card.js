import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart.actions';
import Card from '../components/Main/Card/Card';

const mapStarteToProps = () => {};

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions,dispatch),
});

export default connect(mapStarteToProps, mapDispatchToProps)(Card);
