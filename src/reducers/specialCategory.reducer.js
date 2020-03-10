import {specialCategoryConstants} from "../constants";

const initialState = {
    sections: new Map(),
};

export default (state = initialState, action) => {
    switch(action.type){
        case specialCategoryConstants.GET_SPECIAL_CATEGORY_REQUEST:
            return {
                ...state
            };
            break;
        case specialCategoryConstants.GET_SPECIAL_CATEGORY_SUCCESS:
            return {
                ...state,
                sections: state.sections.setItem(action.payload.name, action.payload)
            };
            break;
        case specialCategoryConstants.GET_SPECIAL_CATEGORY_FAILURE:
            return {
                ...state
            };
            break;
        default:
            return state;
    }
}