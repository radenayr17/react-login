import {EMAIL,PASSWORD, REMEMBER }from "../constants/index";

export const setUserLogin = (email,password,remember) =>{
    return (dispatch) => {
        dispatch({type:EMAIL,payload:email});
        dispatch({type:PASSWORD,payload:password});
        dispatch({type:REMEMBER,payload:remember});
    }
}

export const clearUserLogin = () =>{
    return (dispatch) => {
        dispatch({type:EMAIL,payload:""});
        dispatch({type:PASSWORD,payload:""});
        dispatch({type:REMEMBER,payload:false});
    }
}