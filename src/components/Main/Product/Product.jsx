import React from 'react';
import './product.css';

const Product = (props) => {
    const { pictureURL, price, title, addToCart, discount, key } = props;
    return (
        <div className='product-container'>
            <div className='product-control'>
                <div className="product-img">
                    <img src={ pictureURL } alt={ title } />
                </div>
                <div className="control-bar">
sdasd
                </div>
            </div>
            <div className="product-description">

            </div>
        </div>
    )
};

export default Product;