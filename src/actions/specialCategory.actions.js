import { specialCategoryConstants } from "../constants";
import {specialCategoryServices} from "../services";

export const specialCategoryActions = {
    getSpecialCategory,
};

function getSpecialCategory(categoryName){
    return dispatch => {
        dispatch(request());
        specialCategoryServices.getSpecialCategory(categoryName)
            .then(
                cards => {
                    dispatch(success(cards));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );

    };

    function request() { return { type: specialCategoryConstants.GET_SPECIAL_CATEGORY_REQUEST } }
    function success(data) { return { type: specialCategoryConstants.GET_SPECIAL_CATEGORY_SUCCESS, payload: data } }
    function failure(error) { return { type: specialCategoryConstants.GET_SPECIAL_CATEGORY_FAILURE, error } }
}