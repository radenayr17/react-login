import {combineReducers} from "redux";
import {EMAIL,PASSWORD,REMEMBER} from "../constants/index";

const loginInitialState = {
    "email":"",
    "password":"",
    "remember":false
}

const loginReducer = (state = loginInitialState, action) =>{
    switch(action.type){
        case EMAIL: return {...state,"email":action.payload};
        case PASSWORD: return {...state,"password":action.payload};
        case REMEMBER: return {...state,"remember":action.payload};
        default: return state;
    }
}

const reducers = combineReducers({
    login:loginReducer
});

export default reducers;