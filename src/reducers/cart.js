const initialState = {
    items: localStorage.getItem('cartItems') ? JSON.parse( localStorage.getItem('cartItems') ) : [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if(localStorage.getItem('cartItems') ) {
                let ls = JSON.parse(localStorage.getItem('cartItems'));
                let newLs = [ ...ls.filter(item => item._id !== action.payload._id ), action.payload ];
                localStorage.setItem('cartItems', JSON.stringify( newLs ) );
                return {
                    ...state,
                    items: newLs
                }
            } else if( !localStorage.getItem('cart.items') ) {
                localStorage.setItem('cartItems', JSON.stringify([action.payload]) );
                return {
                    ...state,
                    items: [action.payload] }
            }
            break;
        case 'REMOVE_FROM_CART':
            localStorage.setItem('cartItems',JSON.stringify(state.items.filter( e => e._id !== action.payload )));
            return {
                ...state,
                items: state.items.filter( o => o._id !== action.payload )
            };
        default:
            return state;
    }
};




