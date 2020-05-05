import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import project1 from "./images/project1.PNG";
import ProjectDetail from "./ProjectDetail";
import { Card, Button } from "react-bootstrap";
import { Element } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import "./css/project.css";
import { Link as Li, animateScroll as scroll } from "react-scroll";
// Project 설명
function Project() {
  return (
    <div>
      <Element id="Project" />
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div style={{ padding: "50px" }}>
          <h1 className="h1Text">Project</h1>
          <div className="cards">
            <Card className="mcard1">
              <Zoom>
                <Card.Img
                  variant="top"
                  src={project1}
                  style={{ height: "190px" }}
                />
              </Zoom>
              <Card.Body className="project_con">
                <Card.Title>포트폴리오</Card.Title>
                {/* <Card.Text>페이지 기능 : 로그인, 회원가입, 로그아웃</Card.Text> */}
                <Button>
                  <ProjectDetail />
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Project;
