import React from "react";
import images from "./images/back.jpg";
import Header from "./Header";
import Profile from "./Profile";
import Skill from "./Skill";
import Contact from "./Contact";
import "./css/LadingPage.css";
import { withRouter } from "react-router-dom";
import Typing from "./typing";

function LadingPage() {
  return (
    <div>
      <div className="Size">
        <img src={images} className="img_size" alt="" />
        <span className="imgText">
          <Typing />
        </span>
      </div>
      <Header />
      <Profile />
      <Skill />
      <Contact />
    </div>
  );
}
export default withRouter(LadingPage);
