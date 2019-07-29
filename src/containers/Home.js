import { connect } from 'react-redux';
import Home from '../components/Main/Home/Home';
import { bindActionCreators } from 'redux';
import * as dressesActions from '../actions/dresses';



const mapStateToProps = ({ dresses }) => ({
    dresses: dresses.items,
    isReady: dresses.isReady,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(dressesActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);