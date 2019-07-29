import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import Card from '../components/Main/Card/Card';

const mapStarteToProps = ({ cart }) => ({
    addedCount: 0
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions,dispatch),
});

export default connect(mapStarteToProps, mapDispatchToProps)(Card);
