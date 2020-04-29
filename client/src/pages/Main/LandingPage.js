import React from "react";
import Back from "./Back";

import Profile from "./Profile";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import "./css/LadingPage.css";
import { withRouter } from "react-router-dom";

function LadingPage() {
  return (
    <div>
      <div className="LMain">
        <Back />
        <ScrollAnimation animateIn="fadeIn">
          <Profile />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <Skill />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <Project />
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeIn">
        <Contact />
      </ScrollAnimation>
    </div>
  );
}
export default withRouter(LadingPage);
