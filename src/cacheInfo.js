let userInfo = {};

export const setUserInCache = (val) =>{
    userInfo = JSON.parse(JSON.stringify(val));
}

export const resetUserInCache = () =>{
    userInfo = {}
}

export const getUserInCache =() =>{
    return userInfo;
}

