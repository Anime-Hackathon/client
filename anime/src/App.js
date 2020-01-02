import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {AuthAttempt} from "./Actions/Login";

//Components
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {

  const dispatch = useDispatch();

  return (
    <div>
      <div className="App">
        <NavBar />
        <Route exact path="/" render={(props)=> <Signin {...props} dispatch={dispatch} AuthAttempt={AuthAttempt}/>}/>
        <Route path="/SignUp" component={Signup} render />
      </div>
    </div>
  );
}

export default App;
