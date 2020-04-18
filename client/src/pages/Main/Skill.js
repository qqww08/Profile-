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
import { OverlayTrigger, Popover } from "react-bootstrap";

// 아이콘 이미지
function Skill() {
  return (
    <div
      style={{
        background: "#f7f7f7",
        boxShadow: "0 0 4px 0 rgba(0,0,0,0.3)",
        marginTop: "30px",
      }}
      className="skillbody"
    >
      <Element id="skill" />
      <h1 className="h1Text">Skill</h1>
      <h1 className="h2Text">Front End</h1>
      <ul className="skill">
        <li>
          {/* Bootstrap 이용해서 이미지 클릭시 Tooltips */}
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            overlay={
              <Popover
                id={`popover-positioned-${"top"}`}
                style={{ margin: "0px" }}
              >
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
          {/* Bootstrap 이용해서 이미지 클릭시 Tooltips */}
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            overlay={
              <Popover
                id={`popover-positioned-${"top"}`}
                style={{ margin: "0px" }}
              >
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
          {/* Bootstrap 이용해서 이미지 클릭시 Tooltips */}
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            overlay={
              <Popover
                id={`popover-positioned-${"top"}`}
                style={{ margin: "0px" }}
              >
                <Popover.Title as="h3" style={{ textAlign: "center" }}>
                  JavaScript
                </Popover.Title>
                <Popover.Content style={{ width: "170px" }}>
                  EC6 문법 활용
                </Popover.Content>
              </Popover>
            }
          >
            <img src={js} alt="js" style={{ cursor: "pointer" }} />
          </OverlayTrigger>
        </li>

        <li>
          {/* Bootstrap 이용해서 이미지 클릭시 Tooltips */}
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            overlay={
              <Popover
                id={`popover-positioned-${"top"}`}
                style={{ margin: "0px" }}
              >
                <Popover.Title as="h3" style={{ textAlign: "center" }}>
                  React
                </Popover.Title>
                <Popover.Content style={{ width: "170px" }}>
                  Hooks 을 이용한 상태관리
                </Popover.Content>
              </Popover>
            }
          >
            <img src={react} alt="react" style={{ cursor: "pointer" }} />
          </OverlayTrigger>
        </li>
        <li>
          {/* Bootstrap 이용해서 이미지 클릭시 Tooltips */}
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            overlay={
              <Popover
                id={`popover-positioned-${"top"}`}
                style={{ margin: "0px" }}
              >
                <Popover.Title as="h3" style={{ textAlign: "center" }}>
                  Redux
                </Popover.Title>
                <Popover.Content style={{ width: "170px" }}>
                  Redux-thrunk, Redux-promise 사용
                </Popover.Content>
              </Popover>
            }
          >
            <img src={redux} alt="redux" style={{ cursor: "pointer" }} />
          </OverlayTrigger>
        </li>
        <li>
          {/* Bootstrap 이용해서 이미지 클릭시 Tooltips */}
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            overlay={
              <Popover
                id={`popover-positioned-${"top"}`}
                style={{ margin: "0px" }}
              >
                <Popover.Title as="h3" style={{ textAlign: "center" }}>
                  Bootstrap
                </Popover.Title>
                <Popover.Content style={{ width: "170px" }}>
                  반응형 웹 제작
                </Popover.Content>
              </Popover>
            }
          >
            <img src={Bootstrap} alt="ant" style={{ cursor: "pointer" }} />
          </OverlayTrigger>
        </li>
      </ul>
      <h1 className="h2Text">Back-end</h1>
      <ul className="skill">
        <li>
          {/* Bootstrap 이용해서 이미지 클릭시 Tooltips */}
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            overlay={
              <Popover
                id={`popover-positioned-${"top"}`}
                style={{ margin: "0px" }}
              >
                <Popover.Title as="h3" style={{ textAlign: "center" }}>
                  nodeJs
                </Popover.Title>
                <Popover.Content style={{ width: "170px" }}>
                  expressjs 활용 bcrypt 이용해서 비밀번호 암호화, jsonwebtoken
                  쿠키 토큰 생성
                </Popover.Content>
              </Popover>
            }
          >
            <img src={node} alt="node" style={{ cursor: "pointer" }} />
          </OverlayTrigger>
        </li>
        <li>
          {/* Bootstrap 이용해서 이미지 클릭시 Tooltips */}
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            overlay={
              <Popover
                id={`popover-positioned-${"top"}`}
                style={{ margin: "0px" }}
              >
                <Popover.Title as="h3" style={{ textAlign: "center" }}>
                  MongoDB
                </Popover.Title>
                <Popover.Content style={{ width: "170px" }}></Popover.Content>
              </Popover>
            }
          >
            <img src={mongodb} alt="material" style={{ cursor: "pointer" }} />
          </OverlayTrigger>
        </li>
      </ul>
      <h1 className="h2Text">아이콘을 클릭해주세요</h1>
    </div>
  );
}

export default Skill;
