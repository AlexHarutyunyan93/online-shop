import axios from 'axios';

const initialState = {
    received: []
};

export default ( state = initialState, action ) => {
    switch( action.type ) {
        case 'GET_URL':
            axios( action.payload )
                .this( res => {
                    return {
                        received: res.data
                    }
                })
    }
}