import {languageConstants} from "../constants/language.constants";
import {languageServices} from "../services/language.service";

export const languageActions = {
    getLanguages,
    setLanguage
};

function setLanguage(id){
    languageServices.setLanguage(id);
    return {
        type: languageConstants.SET_LANGUAGE,
        payload: id
    }
}

function getLanguages(){
    return dispatch => {
        dispatch(request());
        languageServices.getLanguages()
            .then(data => success(data))
            .catch(err => failure(err))
    };

    function request() { return { type: languageConstants.GET_LANGUAGES_REQUEST } }
    function success(languages) { return { type: languageConstants.GET_LANGUAGES_SUCCESS, payload: languages } }
    function failure(error) { return { type: languageConstants.GET_LANGUAGES_FAILURE, error } }
}