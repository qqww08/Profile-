import React from "react";
import images1 from "./images/back.jpg";
import "./css/profile.css";
import { Element } from "react-scroll";

function Profile() {
  return (
    <>
      <Element id="about" />
      <span className="about">
        <h1>About</h1>
      </span>

      <div className="profile_flex">
        <img src={images1} alt="pro" className="profile_img" />
        <ul></ul>
      </div>
    </>
  );
}

export default Profile;
