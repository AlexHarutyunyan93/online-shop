import React from 'react';
import { connect } from 'react-redux';
import Collection from '../components/Main/Collections/Collection';
import { bindActionCreators } from 'redux';
import * as dressesActions from '../actions/dresses';
import request from '../actions/http';

class Collections extends React.Component {
    componentDidMount() {
        const { setDresses, url } = this.props;
        request(url, setDresses);
    }
    render(){
        return(
            <Collection {...this.props} />
        )
    }
};

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
)(Collections);
