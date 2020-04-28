const initialState = {
    isLoggedIn: false,
    userData: {}
}

const loggedReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETUSERLOGSTATE':
            return {
                ...state,
                isLoggedIn: action.payload
            };
        case 'SETUSERDATA':
            return {
                ...state,
                userData: action.payload
            }
        default:
            return state;
    };
}

export default loggedReducer;