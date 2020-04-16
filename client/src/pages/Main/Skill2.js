import React from "react";
import html5 from "./images/html5.svg";
import css3 from "./images/css3.svg";
import js from "./images/js.svg";
import mongodb from "./images/mongodb.svg";
import node from "./images/node.svg";
import react from "./images/react.svg";
import redux from "./images/redux.png";
import Bootstrap from "./images/Bootstrap_logo.png";
import "./css/skill2.css";
import { Element } from "react-scroll";
import {
  OverlayTrigger,
  Popover,
  Container,
  Row,
  Image,
  Col,
} from "react-bootstrap";

function Skill2() {
  return (
    <Container className="SkillImg">
      <Row>
        <Col xs={6} md={4}>
          <Image src={html5} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={css3} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={js} rounded />
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <Image src={react} rounded />
        </Col>

        <Col xs={6} md={4}>
          <Image src={redux} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={Bootstrap} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Skill2;
