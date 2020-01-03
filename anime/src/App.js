import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AuthAttempt, AuthSignUp } from "./Actions/Login";
import PrivateRoute from "./components/PrivateRoute";
import AnimeList from "./components/AnimeList";
//Components
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="App">
        <NavBar />
        <Route
          exact
          path="/"
          render={props => (
            <Signin {...props} dispatch={dispatch} AuthAttempt={AuthAttempt} />
          )}
        />
        <Route
          path="/SignUp"
          render={props => (
            <Signup {...props} dispatch={dispatch} AuthSignUp={AuthSignUp} />
          )}
        />
        <PrivateRoute path="/prList" component={AnimeList} />
      </div>
    </div>
  );
}

export default App;
