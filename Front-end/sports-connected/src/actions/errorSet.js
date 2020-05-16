const errorUser = (error) => {
    return {
        type: 'SETERROR',
        payload: error
    };
};

export default errorUser;