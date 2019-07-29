import React from 'react';
import { NavLink } from "react-router-dom";
import './middle.css';

const Middle = () => {
    return(
        <div className="middle-header-wrapper">
            <div className="middle-header">
                <div className="left-side">
                    <span>sales@insales.ru</span><br/>
                    <span>+7(495)649-83-14</span>
                </div>

                <NavLink to="/" className="logo-wrapper">
                    <img className="logo"  src="http://localhost:3000/images/logo.png" alt="logo"/>
                </NavLink>

                <div className="right-side">
                    <input placeholder="Поиск товаров" type="search"/>
                </div>
            </div>
        </div>
    );
}

export default Middle;