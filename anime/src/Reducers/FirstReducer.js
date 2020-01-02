import React from'react';

const initialState = {
    isLoggedIn: false,
    loading: false,
    username:'',
    token: '',
    attemptFailed: false
}

export const LoginReducer=(state =initialState, action)=>{
    switch(action.type){
        case "loading":
            return{...state, loading: true}
        case "success":
            return {...state, loading: false, username:action.payload.username, token: action.payload.token, isLoggedIn: true}
        case "failure":
            return {...state, loading: false, attemptFailed: true}
        default:
            return state
    }
}