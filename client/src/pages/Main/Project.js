import React from "react";
import project1 from "./images/project1.PNG";
import project2 from "./images/project2.PNG";
import { Card, Button } from "react-bootstrap";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import "./css/project.css";

// Project 설명
function Project() {
  return (
    <div>
      <Element id="Project" />
      <div style={{ padding: "50px" }}>
        <h1 className="h1Text">Project</h1>
        <div className="cards">
          <Card className="mcard1">
            <Card.Img
              variant="top"
              src={project1}
              style={{ height: "190px" }}
            />
            <Card.Body className="project_con">
              <Card.Title>포트폴리오</Card.Title>
              <Card.Text>페이지 기능 : 로그인, 회원가입, 로그아웃</Card.Text>
              <Button variant="primary" href="/">
                바로가기
              </Button>
            </Card.Body>
          </Card>
          <Card className="mcard2">
            <Card.Img
              variant="top"
              src={project2}
              style={{ height: "190px" }}
            />
            <Card.Body className="project_con">
              <Card.Title>게시판</Card.Title>
              <Card.Text>페이지 기능 : 게시판CRUD, 페이징, SPA </Card.Text>
              <Link to="/List">
                <Button variant="primary">바로가기</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Project;
