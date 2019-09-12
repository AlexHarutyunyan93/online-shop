import React from 'react';
import Card from "../../../containers/Card";
import './collections.css';


function Collection(props) {
    const { isReady, dresses } = props;
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

export default Collection;











