const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'LOGINUSER':
            return true;
        case 'LOGOUTUSER':
            return false;
        default:
            return false;
    };
}

export default loggedReducer;