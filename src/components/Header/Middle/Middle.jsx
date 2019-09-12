import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './middle.css';

const Middle = () => {
    const [query, setQuery] = useState('');
    const handleChange = e => {
        setQuery(e.target.value)
    };
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
                    <form action={`http://localhost:4000/api/search/?q=${query.split(" ").join("+")}`} method="get" >
                        <div className="wrap">
                            <div className="search">
                                <input type="text" value={query} onChange={handleChange} name="searching" className="searchTerm" placeholder="Поиск товаров" />
                                <button type="submit" className="searchButton">
                                    <i className="fa fa-search">
                                        <NavLink to="/" className="logo-wrapper"></NavLink>
                                    </i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Middle;
