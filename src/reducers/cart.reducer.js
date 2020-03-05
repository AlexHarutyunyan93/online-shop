import {cartConstants} from "../constants";

const initialState = {
    cartItems: null,
    loading: true,
    length: localStorage.getItem('cartItems') ? JSON.parse( localStorage.getItem('cartItems') ).length : 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case cartConstants.GET_CART_ITEMS_REQUEST:
            return {
                ...state,
                loading: true,
                cartItems: null,
            };
            break;
        case cartConstants.GET_CART_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: action.payload
            };
            break;
        case cartConstants.GET_CART_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
            break;
        case cartConstants.ADD_TO_CART_SUCCESS:
            return{
                ...state,
                length: action.payload.length
            };
            break;
        case cartConstants.ADD_TO_CART_FAILURE:
            return {
                ...state,
                warning: action.warning
            };
            break;
        case cartConstants.REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                length: action.payload.length,
                cartItems: action.payload,
            };
        default:
            return state;
    }
};




