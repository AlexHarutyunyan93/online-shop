import React from 'react';
import { Route } from 'react-router-dom';
import './main.css';
import Home from './../../containers/Home';
import Cart from './../../containers/Cart';
// import Product from '../../containers/Product';
import Collection from "../../containers/Collections";
import request from '../../actions/http';

const Main = () => {
    return (
        <main className="main-content-wrapper">
            <div className="main-content">
               <Route exact path='/' render={() => <Home url='/api/spring-summer' request={ request } /> } />
               <Route path='/cart' render={() => <Cart /> } />
               {/*<Route path='/products' render={() => <Product /> } />*/}
               <Route path='/Spring-Summer' render={() => <Collection url='/api/spring-summer' request={ request } /> } />
               <Route path='/Winter-Oen' render={() => <Collection url='/collections/WinterOen.json' request={ request } /> } />
               <Route path='/Evening-Dresses' render={() => <Collection url='/collections/EveningDresses.json' request={ request } /> } />
               <Route path='/Kids' render={() => <Collection url='/collections/Kids.json' request={ request } /> } />
            </div>
        </main>
    );

};

export default Main;
