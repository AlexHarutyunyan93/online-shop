import { combineReducers } from 'redux';

import dresses from './dresses';
import cart from './cart';


export default combineReducers({
    dresses,
    cart,
});