import { connect } from 'react-redux';
import TopHeader from '../components/Header/Top/Top';

const mapStarteToProps = ({ cart }) => ({
    isReady: cart.isReady,
    count: cart.items.length
});

export default connect(mapStarteToProps)(TopHeader);
