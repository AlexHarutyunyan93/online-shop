import React from 'react';
import { Route } from 'react-router-dom';
import './main.css';
import Home from './../../containers/Home';
import Cart from './../../containers/Cart'; 
import Product from '../../containers/Product';
import Collection from "../../containers/Collections";
import About from './About/About';

const Main = () => {
    return (
        <main className="main-content-wrapper">
            <div className="main-content">
               <Route exact path='/' render={() => <Home url='/data.json' /> } />
                <Route path='/cart' render={() => <Cart /> } />
                <Route path='/about' render={() => <About /> } />
                <Route path='/products' render={() => <Product /> } />
                <Route path='/Spring-Summer' render={() => <Collection url='/data.json' /> } />
                <Route path='/Winter-Oen' render={() => <Collection url='/data.json' /> } />
                <Route path='/Evening-Dresses' render={() => <Collection url='/data.json' /> } />
                <Route path='/Kids' render={() => <Collection url='/data.json' /> } />
            </div>
        </main>
    );

};

export default Main;

