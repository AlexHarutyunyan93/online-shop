import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dressActions from '../actions/dresses';
import Product from '../components/Main/Product/Product';

const mapStarteToProps = ({ items }) => ({
    addedCount: 0
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(dressActions,dispatch),
});

export default connect(mapStarteToProps, mapDispatchToProps)(Product);
