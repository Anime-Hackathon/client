import React from'react';

const checkToken = () => {
    let token = localStorage.getItem("token")
    if(token !== ''){
        return token
    }else{
        return token = ''
    }
}

const checkUser = ()=>{
    let username = localStorage.getItem("username")
    if(username !==''){
        return username
    }else{
        return username = ''
    }
}

const checkLoggedIn = () => {
    let token = localStorage.getItem('token')
    if(token){
        return true;
    }else{
        return false
    }
}

const initialState = {
    isLoggedIn: checkLoggedIn(),
    loading: false,
    username:checkUser(),
    token: checkToken(),
    attemptFailed: false
}

export const LoginReducer=(state =initialState, action)=>{
    switch(action.type){
        case "loading":
            return{...state, loading: true, username:action.payload}
        case "success":
            return {...state, loading: false, token: action.payload, isLoggedIn: true}
        case "failure":
            return {...state, loading: false, attemptFailed: true}
        case "logout":
            return {...state, loading:false, isLoggedIn:false, attemptFailed:false}
        default:
            return state
    }
}