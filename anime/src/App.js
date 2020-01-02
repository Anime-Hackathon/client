import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Router } from "react-router-dom";

//Components
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <Route>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Signin} />
        <Route path="/SignUp" component={Signup} />
      </div>
    </Route>
  );
}

export default App;
