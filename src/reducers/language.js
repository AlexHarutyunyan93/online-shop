const initialState = {
    language: localStorage.getItem("language") || "0",
};

export default function(state = initialState, action) {
    switch(action.type) {
        case "CHECK_LANGUAGE":
            localStorage.setItem("language", action.payload);
            return {
                language: localStorage.getItem("language")
            };
        default:
            return state;
    }
}
