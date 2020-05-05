import React, { useSelector } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Back from "../src/pages/Main/Back";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BorderWrite from "./pages/Posts/BorderWrite";
import BorderList from "./pages/Posts/BorderList";
import LandingPage from "./pages/Main/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import BorderInfo from "./pages/Posts/BorderInfo";
import BorderEdit from "./pages/Posts/BorderEdit";
import Header from "./pages/Main/Header";

// import FacebookPage from "./sns/Facebook";
import Auth from "./hoc/auth";
import Github from "./pages/Main/Github";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Auth(LandingPage, false)} />

      <Header />
      <Github />

      <Switch>
        <Route exact path="/Write" component={Auth(BorderWrite, true)} />
        <Route exact path="/List" component={Auth(BorderList, false)} />
        <Route exact path="/:postId" component={Auth(BorderInfo, false)} />
        <Route exact path="/edit/:postId" component={Auth(BorderEdit, true)} />
      </Switch>
    </Router>
  );
}

export default App;
