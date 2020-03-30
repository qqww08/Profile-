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
        <ul>
          <li>Profile</li>
          <li>신대현 DaeHyun Shin</li>
          <li>1994.05.10</li>
          <li>울산과학대학 컴퓨터정보학과 졸업</li>
        </ul>
      </div>
    </>
  );
}

export default Profile;
