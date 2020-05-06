import React from "react";
import Typing from "./typing";
import images from "./images/back.PNG";
import "./css/back.css";
import SosialLogin from "../LoginPage/SosialLogin";
function Back() {
  return (
    //Landing Page Img
    <div className="back">
      <span className="imgText">
        <Typing />
      </span>
    </div>
  );
}
export default Back;
