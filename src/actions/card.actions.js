import {cardConstants} from "../constants";
import {cardService} from "../services/card.service";

export const cardActions = {
    getCardById,
    getCardsByCategoryId,
    getBySpecialCategoryId
};

function getCardById(id) {
    return dispatch => {
        dispatch(request());

        cardService.getCardById(id)
            .then(
                cards => {
                    dispatch(success(cards));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );

    };
    function request() { return { type: cardConstants.GET_CARD_ITEMS_BY_ID_REQUEST } }
    function success(cards) { return { type: cardConstants.GET_CARD_ITEMS_BY_ID_SUCCESS, payload: cards } }
    function failure(error) { return { type: cardConstants.GET_CARD_ITEMS_BY_ID_FAILURE, error } }
}

function getCardsByCategoryId(id) {
    return dispatch => {
        dispatch(request());

        cardService.getCardsByCategoryId(id)
            .then(
                cards => {
                    dispatch(success(cards));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };
    function request() { return { type: cardConstants.GET_CARD_ITEMS_BY_CATEGORY_ID_REQUEST } }
    function success(cards) { return { type: cardConstants.GET_CARD_ITEMS_BY_CATEGORY_ID_SUCCESS, payload: cards } }
    function failure(error) { return { type: cardConstants.GET_CARD_ITEMS_BY_CATEGORY_ID_FAILURE, error } }
}

function getBySpecialCategoryId(id) {

}
