import {languageConstants} from "../constants/language.constants";

const initialState = {
    loading: true,
    languages: [],
    default: null,
    language: localStorage.getItem('currentLanguageId'),
};

export default function(state = initialState, action) {
    switch(action.type) {
        case languageConstants.GET_LANGUAGES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case languageConstants.GET_LANGUAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                default: action.payload.find(e => e.default === 1),
                languages: action.payload
            };
        case languageConstants.GET_LANGUAGES_FAILURE:
            return {
                ...state,
                loading: false
            };
        case languageConstants.SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            };
        default:
            return state;
    }
}
