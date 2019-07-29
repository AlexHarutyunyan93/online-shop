import React from 'react';

const Card = (props) => {
    const { pictureURL, price, _id, title, removeFromCart } = props;
    return (
        <div className="cart-card-wrapper">
            <div className='item-image-wrapper'>
                <div className="item-image-inner">
                    <img className='item-image' src={ pictureURL } alt={ title }/>
                </div>
            </div>
            <div className='cart-card-title'>
                {title}
            </div>
            <div className='cart-card-price'>
                {price}.00 руб
            </div>
            <button onClick={ () => removeFromCart( _id ) } className='cart-remove-button'>&times;</button>
        </div>
    )
};

export default Card;