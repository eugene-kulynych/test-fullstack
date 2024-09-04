const initialState = []

export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PROJECTS":
            return action.payload;
        default:
            return state;
    }
};
