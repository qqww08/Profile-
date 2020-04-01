import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Write from "./pages/Posts/Write";
import LandingPage from "./pages/Main/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import WriteOpen from "./pages/Posts/WriteOpen";
// import FacebookPage from "./sns/Facebook";
import Auth from "./hoc/auth";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth(LoginPage, false)} />
        <Route exact path="/Main" component={Auth(LandingPage, true)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/post/Write" component={Auth(Write, true)} />
        <Route exact path="/post/:postId" component={Auth(WriteOpen, true)} />
      </Switch>
    </Router>
  );
}

export default App;
