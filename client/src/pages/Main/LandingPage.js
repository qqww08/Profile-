import React from "react";
import Back from "./Back";

import Profile from "./Profile";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import Demo from "./Demo";
import "./css/LadingPage.css";
import { withRouter } from "react-router-dom";

function LadingPage() {
  return (
    <div className="LMain">
      <Back />
      <Profile />

      <Skill />
      <Project />

      <Contact />
    </div>
  );
}
export default withRouter(LadingPage);
