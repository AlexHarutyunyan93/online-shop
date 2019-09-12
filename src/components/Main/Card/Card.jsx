import React from 'react';
import './Card.css';

const Card = (props) => {
    const { pictureURL, price, title, addToCart, discount, key } = props;
    console.log(props);
    return (
        <div key={key} className="product-card-wrapper">
            <div className="product-card">
                <div className="inProduct-card">
                    {
                        !discount ? discount :
                            <div className='discount'>
                                -{discount}%
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
                            !discount ? price : <span>
                                <strike>{price} руб</strike>
                                { price/100* (100 - discount) }
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
