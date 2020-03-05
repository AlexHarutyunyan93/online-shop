import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Main/Home/Home';
import { bindActionCreators } from 'redux';
import * as dressesActions from '../actions/dresses';
import request from '../config/http';

class HomePage extends React.Component {
    state = {
        dresses: null
    };

    componentDidMount() {
        const {url} = this.props;
        request(url, res => this.setState({dresses: res}))
    }
    render() {
        return (
            <Home dresses={ this.state.dresses } />
        )
    }
}

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
)(HomePage);
