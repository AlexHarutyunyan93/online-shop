import React from 'react';
import { NavLink } from "react-router-dom";
import './top.css';

const Top = ({count, language, setLanguage}) => {
    return(
        <nav className='top-header-wrapper'>
            <div className='top-header'>
                <ul className='top-header-nav-bar'>
                    <li>Каталог</li>
                    <li>
                        <NavLink to="/about">
                            О компании
                        </NavLink>
                    </li>
                    <li>Контакты</li>
                </ul>
                <div className="top-header-right-sidebar">
                    <NavLink to="/cart" className="header-cart-link">
                        <div className="header-cart">Корзина</div>
                        <div className="header-cart-count">{ count }</div>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Top;
