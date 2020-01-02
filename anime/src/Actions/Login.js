import React from "react";
import axios from "axios";

const send = data => {
  return { type: "send", payload: data };
};

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
