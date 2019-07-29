import React from 'react';
import { NavLink } from 'react-router-dom';
import './bottom.css';

const Bottom = () => {
    return(
        <div className="bottom-header-wrapper">
            <div className='bottom-header'>
                <ul className='bottom-header-nav-bar'>
                    <li>
                        <NavLink to='/spring-summer' className='bottom-link'>
                            Коллекция Весна-Лето
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/winter-oen' className='bottom-link'>
                            Коллекция Осень-Зима
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/evening-dresses' className='bottom-link'>
                            Вечерние платья
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/kids' className='bottom-link'>
                            Детские
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Bottom;