import React from "react";
import github from "./images/git.png";
import "./css/github.css";
const Github = () => {
  return (
    <div className="gith">
      <a href="https://github.com/qqww08/Profile-" target="_blank">
        <img src={github} alt="github" className="gitimg" />
      </a>
    </div>
  );
};

export default Github;
