import React, { Component } from 'react';
import Card from "../../../containers/Card";
import './collections.css';


class Collection extends Component {
    componentDidMount() {
        const { setDresses, url, request } = this.props;
        request(url, setDresses);
    }

    render() {
        const { isReady, dresses } = this.props;
        return (
            <div className="main-collections-wrapper">
                <div className="main-collections">
                    {
                      !isReady ? "Loading..." :  dresses.map(property => <Card key={property.id} {...property}  />)
                    }
                </div>
            </div>
        );
    }
}

export default Collection;