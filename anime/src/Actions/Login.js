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

export const AuthAttempt = (loginStuff) => {

  return function(dispatch) {

    dispatch(loading);

    return axios.post(req, loginStuff)
    .then(res => {
      if (res.status === 500) {
        dispatch(failure(res.data))
      }else{
        dispatch(success(res.data))
      }
    })
    .catch(err => {
      console.log(err)
    });
  };
};
