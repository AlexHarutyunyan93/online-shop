import { combineReducers } from 'redux';

import dresses from './dresses';
import cart from './cart.reducer';


export default combineReducers({
    dresses,
    cart,
});
