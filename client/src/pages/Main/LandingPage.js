import React, { useEffect } from "react";
import Back from "./Back";
import Profile from "./Profile";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import "animate.css/animate.min.css";
import BorderList from "../Posts/BorderList";
import "./css/LadingPage.css";
import { withRouter } from "react-router-dom";

function LadingPage() {
  return (
    <div>
      <Back />

      <Profile />

      <Skill />

      <BorderList />

      <Project />

      <Contact />
    </div>
  );
}
export default withRouter(LadingPage);
