import React from "react";
import html5 from "./images/html5.svg";
import css3 from "./images/css3.svg";
import js from "./images/js.svg";
import mongodb from "./images/mongodb.svg";
import node from "./images/node.svg";
import react from "./images/react.svg";
import redux from "./images/redux.png";
import ant from "./images/ant.png";
import "./css/skill.css";

function Skill() {
  return (
    <div>
      <h1 className="h1text">Web Skills</h1>
      <ul className="skill">
        <li>
          <img src={html5} alt="html" />
        </li>
        <li>
          <img src={css3} alt="css3" />
        </li>
        <li>
          <img src={js} alt="js" />
        </li>
      </ul>
      <h1 className="h1text">FrameWork</h1>
      <ul className="skill">
        <li>
          <img src={react} alt="react" />
        </li>
        <li>
          <img src={redux} alt="redux" />
        </li>
        <li>
          <img src={ant} alt="ant" />
        </li>
      </ul>
      <h1 className="h1text">Back-end</h1>
      <ul className="skill">
        <li>
          <img src={node} alt="node" />
        </li>
        <li>
          <img src={mongodb} alt="material" />
        </li>
      </ul>
    </div>
  );
}

export default Skill;
