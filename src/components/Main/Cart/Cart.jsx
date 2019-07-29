import React from 'react';
import './cart.css';
import Card from './Card';

const Cart = ({ cartItems, totalPrice, count, removeFromCart }) => {
    return (
        <div className="cart-wrapper">
            <div className="cart">
                <h1 className='cart-title'>Корзина</h1>
                <div className="cards-container">
                    {
                        cartItems.length === 0 ?
                            <div className="clear-cart-wrapper">
                                <div className="clear-cart">
                                    <p>
                                        Ваша корзина пуста!
                                    </p>
                                </div>
                            </div>
                            : cartItems.map(dress => <Card key={ dress._id}
                                                           count={ count }
                                                           removeFromCart={ removeFromCart }
                                                           { ...dress } />)
                    }
                </div>
                <div className="cart-order">
                    <div className="totalPrice">Total  { totalPrice }.00 руб</div>
                    <button type='button' className='cart-order-button'>Оформить заказ</button>
                </div>
                <p className='clear'></p>
            </div>
        </div>
    )
}

export default Cart;