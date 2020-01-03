import React from "react";
import axios from "axios";

const success = data => {
  return { type: "success", payload: data };
};

const failure = () => {
  return { type: "failure" };
};

const loading = () => {
  return { type: "loading" };
};

export const AuthAttempt = loginStuff => {
  return function(dispatch) {
    dispatch(loading);
    return axios
      .post("https://the-anime-planet.herokuapp.com/api/auth/login", loginStuff)
      .then(res => {
        console.log("response", res);
      })
      .catch(err => {
        console.log("error", err);
      });
  };
};

export const AuthSignUp = signupStuff => {
  return function(dispatch) {
    dispatch(loading);

    return axios
      .post(
        "https://the-anime-planet.herokuapp.com/api/auth/register",
        signupStuff
      )
      .then(res => {
        console.log("from signup response", res);
      })
      .catch(err => {
        console.log(" from signup error", err);
      });
  };
};
