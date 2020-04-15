import React from "react";
import html5 from "./images/html5.svg";
import css3 from "./images/css3.svg";
import js from "./images/js.svg";
import mongodb from "./images/mongodb.svg";
import node from "./images/node.svg";
import react from "./images/react.svg";
import redux from "./images/redux.png";
import Bootstrap from "./images/Bootstrap_logo.png";
import "./css/skill.css";
import { Element } from "react-scroll";

function Skill() {
  return (
    <div>
      <Element id="skill" />
      <h1 className="h1text">Skill</h1>
      <h1 className="h1text">Front End</h1>
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

      <ul className="skill">
        <li>
          <img src={react} alt="react" />
        </li>
        <li>
          <img src={redux} alt="redux" />
        </li>
        <li>
          <img src={Bootstrap} alt="ant" />
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
