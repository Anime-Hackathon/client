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
        case "send":
            return {...state, loading: true, username: action.payload, isLoggedIn: false}
        case "success": 
            return {...state, loading: false, token: action.payload, isLoggedIn: true}
        case "failure":
            return {...state, loading: false, attemptFailed: true}
    }
}