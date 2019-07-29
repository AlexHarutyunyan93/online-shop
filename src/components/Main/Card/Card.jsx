import React from 'react';
import './Card.css';

const Card = (props) => {
    const { pictureURL, price, title, addToCart, discount, key } = props;
    return (
        <div key={key} className="product-card-wrapper">
            <div className="product-card">
                <div className="inProduct-card">
                    {
                        discount === 100 ? '' :
                            <div className='discount'>
                        -{100-discount}%
                        </div>
                    }
                        <img className="flexible-image" src={ pictureURL } alt={title}/>
                    <button onClick={ () => addToCart( props ) } className="product-card-control">
                        В корзину
                    </button>
                </div>
                <div className="product-card-form_block">
                    <div className="product-price">
                        {
                            discount === 100 ? price : <span>
                                <strike>{price} руб</strike>
                                { price/100*discount }
                            </span>
                        } руб
                    </div>
                    <div className="product-title">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;
