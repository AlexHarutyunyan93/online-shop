const initialState = {
    language: localStorage.getItem("language.actions.js") || "0",
};

export default function(state = initialState, action) {
    switch(action.type) {
        case "CHECK_LANGUAGE":
            localStorage.setItem("language.actions.js", action.payload);
            return {
                language: localStorage.getItem("language.actions.js")
            };
        default:
            return state;
    }
}
