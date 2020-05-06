const initialState = {
    isLoggedIn: false,
    userData: {},
    errorName: ""
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
        case 'SETERROR':
            return {
                ...state,
                errorName: action.payload
            }
        default:
            return state;
    };
}

export default loggedReducer;