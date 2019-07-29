import React, { Component } from 'react';
import Card from '../../../containers/Card';
import './NewCollections.css';



class NewCollections extends Component {
    constructor(props) {
        super(props);
        const data = this.props.dresses;
        data.forEach((dress, index) => {
            dress.index = index;
        });
        this.state = {
            properties: data,
            property: data[0]
        }
    }

    nextProperty = () => {
        const {property, properties} = this.state;
        let newIndex = property.index + 1;
        this.setState({
            property: properties[newIndex]
        })
    };

    prevProperty = () => {
        const {property, properties} = this.state;
        let newIndex = property.index - 1;
        this.setState({
            property: properties[newIndex]
        })
    };

    render() {
        const {properties, property} = this.state;
        return (
            <div id="new-collection" className={`collections-slider active-slide-${property.index}`}>
                <div className="collection-title">
                    <h3>New Collection</h3>
                </div>
                    <button
                        className="button prev"
                        onClick={() => this.prevProperty()}
                        disabled={ property.index === 0 }
                    >&#8592;</button>
                    <button
                        className="button next"
                        onClick={() => this.nextProperty()}
                        disabled={ property.index === properties.length - 3 }
                    >&#8594;</button>

                <div className="collections-slider-wrapper" style={{
                    'transform': `translateX(-${property.index * (100 / properties.length)}%)`,
                    "width": `${(3.75 * (properties.length)) + (30.8333333333 * properties.length)}%`
                }}>
                    {
                        properties.map(property => <Card key={property.index} {...property} mar={ 10.8/properties.length } />)
                    }
                </div>
            </div>
        );
    }
}


export default NewCollections;
