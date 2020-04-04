import React from "react";
import Typing from "./typing";
import images from "./images/back.jpg";

function Back() {
  return (
    <div className="Size">
      <img src={images} className="img_size" alt="" />
      <span className="imgText">
        <Typing />
      </span>
    </div>
  );
}
export default Back;