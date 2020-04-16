import React from "react";
import Back from "./Back";

import Profile from "./Profile";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";

import "./css/LadingPage.css";
import { withRouter } from "react-router-dom";

function LadingPage() {
  return (
    <div style={{ marginTop: "55px" }}>
      <Back />
      <Profile />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}
export default withRouter(LadingPage);
