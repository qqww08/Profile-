import React from "react";
import expressjs from "./images/expressjs.png";
import mongodb from "./images/mongodb.svg";
import node from "./images/node.svg";
import react from "./images/react.svg";
import redux from "./images/redux.png";
import Bootstrap from "./images/Bootstrap_logo.png";
import "./css/skill.css";
import { Element } from "react-scroll";
import { OverlayTrigger, Card } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
// 아이콘 이미지
function Skill() {
  return (
    <div>
      <Element id="skill" />
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="stackBack">
          <h1 className="h1Text">Stack</h1>

          <div className="skill">
            <Card className="cardMargin">
              <Card.Img variant="top" src={react} className="imgsize" />
              <Card.Body className="cardSize">
                <Card.Text className="img1">React.js</Card.Text>
              </Card.Body>
            </Card>
            <Card className="cardMargin">
              <Card.Img variant="top" src={node} className="imgsize" />
              <Card.Body className="cardSize">
                <Card.Text className="img1">node.js</Card.Text>
              </Card.Body>
            </Card>
            <Card className="cardMargin">
              <Card.Img variant="top" src={expressjs} className="imgsize" />
              <Card.Body className="cardSize">
                <Card.Text className="img1">express.js</Card.Text>
              </Card.Body>
            </Card>
            <Card className="cardMargin">
              <Card.Img variant="top" src={mongodb} className="imgsize" />
              <Card.Body className="cardSize">
                <Card.Text className="img1">Mongodb</Card.Text>
              </Card.Body>
            </Card>
            <Card className="cardMargin">
              <Card.Img variant="top" src={redux} className="imgsize" />
              <Card.Body className="cardSize">
                <Card.Text className="img1">Redux</Card.Text>
              </Card.Body>
            </Card>
            <Card className="cardMargin">
              <Card.Img variant="top" src={Bootstrap} className="imgsize" />
              <Card.Body className="cardSize">
                <Card.Text className="img1">Bootstrap</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Skill;
