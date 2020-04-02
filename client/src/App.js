import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BorderWrite from "./pages/Posts/BorderWrite";
import BorderList from "./pages/Posts/BorderList";
import LandingPage from "./pages/Main/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import BorderInfo from "./pages/Posts/BorderInfo";
// import FacebookPage from "./sns/Facebook";
import Auth from "./hoc/auth";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth(LoginPage, false)} />
        <Route exact path="/Main" component={Auth(LandingPage, true)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/Write" component={Auth(BorderWrite, false)} />
        <Route exact path="/List" component={Auth(BorderList, false)} />
        <Route exact path="/:postId" component={Auth(BorderInfo, false)} />
      </Switch>
    </Router>
  );
}

export default App;
