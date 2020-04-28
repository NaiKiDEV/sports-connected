const setData = (userData) => {
    return {
        type: 'SETUSERDATA',
        payload: userData
    };
};

export default setData;