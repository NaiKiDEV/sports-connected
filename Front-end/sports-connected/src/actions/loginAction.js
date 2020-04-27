const logUser = (setUserLogged) => {
    return {
        type: 'SETUSERLOGSTATE',
        payload: setUserLogged
    };
};

export default logUser;