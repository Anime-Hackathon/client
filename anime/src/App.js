import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Components
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {

  return (
    <div>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Signin} />
        <Route path="/SignUp" component={Signup} render />
      </div>
    </div>
  );
}

export default App;
