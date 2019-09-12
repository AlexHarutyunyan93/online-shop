import React from 'react';
import "./SpecialCategories.css";
import {NavLink} from "react-router-dom";

const SpecialCategories = () => {
    return (
        <div className="special-categuries-wrapper">
            <div className="special-categories">
                <div className="special-category">
                    <NavLink to='/spring-summer' className="category-inner" href="/">
                        <div className="category-image-inner">
                            <img className="category-image" src="http://localhost:4000/uploads/home/special-category-1.jpg" alt=""/>
                            <div className="category-caption">
                                Весна-Лето
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="special-category">
                    <NavLink to='/winter-oen' className="category-inner" href="/">
                        <div className="category-image-inner">
                            <img className="category-image" src="http://localhost:4000/uploads/home/special-category-2.jpg" alt=""/>
                            <div className="category-caption">
                                Осень-Зима
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="special-category">
                    <NavLink to='/evening-dresses' className="category-inner" href="/">
                        <div className="category-image-inner">
                            <img className="category-image" src="http://localhost:4000/uploads/home/special-category-3.jpg" alt=""/>
                        <div className="category-caption">
                            Вечерние платья
                        </div>
                        </div>
                    </NavLink>
                </div>
                <div className="special-category">
                    <NavLink to='/kids' className="category-inner" href="/">
                        <div className="category-image-inner">
                            <img className="category-image" src="http://localhost:4000/uploads/home/special-category-4.jpg" alt=""/>
                            <div className="category-caption">
                                Детские
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SpecialCategories;
