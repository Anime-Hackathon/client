import React from "react";
import axios from "axios";

const success = data => {
  return { type: "success", payload: data };
};

const failure = () => {
  return { type: "failure" };
};

const loading = (data) => {
  return { type: "loading", payload: data };
};

const logout = ()=>{
  return {type: "logout"}
}

export const AuthAttempt = loginStuff => {
  return function(dispatch) {
    dispatch(loading(loginStuff.email));
    return axios
      .post("https://the-anime-planet.herokuapp.com/api/auth/login", loginStuff)
      .then(res => {
        console.log("response", res);
        dispatch(success(res.data.token))
        localStorage.setItem('token',res.data.token)
        //we'll change the email to id once we get going
        localStorage.setItem('username', loginStuff.email)
      })
      .catch(err => {
        console.log("error", err);
      });
  };
};

export const AuthSignUp = signupStuff=>{
  return function(dispatch){

    dispatch(loading(signupStuff.email))

    return axios
    .post("https://the-anime-planet.herokuapp.com/api/auth/register", signupStuff)
    .then(res => {
      console.log("from signup response", res);
    })
    .catch(err => {
      console.log(" from signup error", err);
    });
  }
}

export const LogOut = ()=>{

  return function(dispatch){

    dispatch(logout());

  }
}
