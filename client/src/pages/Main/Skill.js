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
import { OverlayTrigger, Tooltip, Popover, Button } from "react-bootstrap";

function Skill() {
  return (
    <div>
      <Element id="skill" />
      <h1 className="h1text">Skill</h1>
      <h1 className="h1text">Front End</h1>
      <ul className="skill">
        <li>
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            overlay={
              <Popover id={`popover-positioned-${"top"}`}>
                <Popover.Title as="h3" style={{ textAlign: "center" }}>
                  HTML5
                </Popover.Title>
                <Popover.Content style={{ width: "170px" }}>
                  Basic
                </Popover.Content>
              </Popover>
            }
          >
            <img src={html5} alt="html" style={{ cursor: "pointer" }} />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            overlay={
              <Popover id={`popover-positioned-${"top"}`}>
                <Popover.Title as="h3" style={{ textAlign: "center" }}>
                  CSS3
                </Popover.Title>
                <Popover.Content style={{ width: "170px" }}>
                  FLEX, GRID, 미디어쿼리를 이용한 웹 제작
                </Popover.Content>
              </Popover>
            }
          >
            <img src={css3} alt="css3" style={{ cursor: "pointer" }} />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            overlay={
              <Popover id={`popover-positioned-${"top"}`}>
                <Popover.Title as="h3" style={{ textAlign: "center" }}>
                  CSS3
                </Popover.Title>
                <Popover.Content style={{ width: "170px" }}>
                  FLEX, GRID, 미디어쿼리를 이용한 웹 제작
                </Popover.Content>
              </Popover>
            }
          >
            <img src={js} alt="js" style={{ cursor: "pointer" }} />
          </OverlayTrigger>
        </li>

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
