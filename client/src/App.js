import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/Main/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import write from "./pages/Posts/write";
// import FacebookPage from "./sns/Facebook";
import Auth from "./hoc/auth";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth(LoginPage, false)} />
        <Route exact path="/Main" component={Auth(LandingPage, true)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/write" component={Auth(write, false)} />
      </Switch>
    </Router>
  );
}

export default App;
