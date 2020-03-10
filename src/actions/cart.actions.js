import {cartConstants} from "../constants";
import {cartServices} from "../services";


export const cartActions = {
    addToCart,
    removeFromCart,
    getCartItems
};

function getCartItems(){
    return dispatch => {
        dispatch(request());

        cartServices.getCartItems()
            .then(
                cards => {
                    dispatch(success(cards));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request() { return { type: cartConstants.GET_CART_ITEMS_REQUEST } }
    function success(cards) { return { type: cartConstants.GET_CART_ITEMS_SUCCESS, payload: cards } }
    function failure(error) { return { type: cartConstants.GET_CART_ITEMS_FAILURE, error } }
}

function addToCart(id){
    const response = cartServices.addToCart(id);

    if(response){
        success(response);
    } else {
        failure();
    }

    function success(res){return {type: cartConstants.ADD_TO_CART_SUCCESS, payload: res}}
    function failure(message){return {type: cartConstants.ADD_TO_CART_FAILURE, warning: message}}
}

function removeFromCart(id){
    const response = cartServices.removeFromCart(id);
    success(response);

    function success(res){return {type: cartConstants.REMOVE_FROM_CART_SUCCESS, payload: res}}
}
