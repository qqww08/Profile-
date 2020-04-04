import React from "react";
import Back from "./Back";
import Header from "./Header";
import Profile from "./Profile";
import Skill from "./Skill";
import Contact from "./Contact";
import BorderList from "../Posts/BorderList";
import "./css/LadingPage.css";
import { withRouter } from "react-router-dom";

function LadingPage() {
  return (
    <div>
      <Back />
      <Header />
      <Profile />
      <Skill />
      <BorderList />
      <Contact />
    </div>
  );
}
export default withRouter(LadingPage);
