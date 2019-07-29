import { connect } from 'react-redux';
import Collection from '../components/Main/Collections/Collection';
import { bindActionCreators } from 'redux';
import * as dressesActions from '../actions/dresses';


const mapStateToProps = ({ dresses }) => ({
    dresses: dresses.items,
    isReady: dresses.isReady,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators( dressesActions, dispatch ),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Collection);