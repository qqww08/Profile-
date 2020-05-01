import React, { useEffect } from "react";
import Back from "./Back";
import Profile from "./Profile";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import "animate.css/animate.min.css";
import BorderList from "../Posts/BorderList";

import ScrollAnimation from "react-animate-on-scroll";
import "./css/LadingPage.css";
import { withRouter } from "react-router-dom";

function LadingPage() {
  const post = useSelector((state) => state.post);
  useEffect(() => {
    post.success = false;
  }, []);
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
          <BorderList />
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
