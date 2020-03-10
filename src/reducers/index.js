import { combineReducers } from 'redux';

import cards from './cards.reducer';
import cart from './cart.reducer';
import language from './language.reducer';
import specialCategory from './specialCategory.reducer';


export default combineReducers({
    cards,
    cart,
    language,
    specialCategory
});
