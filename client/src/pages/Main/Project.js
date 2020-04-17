import React from "react";
import project1 from "./images/project1.PNG";
import project2 from "./images/project2.PNG";
import { Card, Button } from "react-bootstrap";
import { Element } from "react-scroll";
import "./css/project.css";
function Project() {
  return (
    <div style={{ margin: "0px" }}>
      <Element id="Project" />
      <h1 className="h1text">Project</h1>
      <div className="cards">
        <Card className="mcard1">
          <Card.Img variant="top" src={project1} style={{ height: "190px" }} />
          <Card.Body>
            <Card.Title>포트폴리오</Card.Title>
            <Card.Text>
              포트폴리오 <br />
              페이지 기능 : 로그인, 회원가입, 로그아웃
            </Card.Text>
            <Button variant="primary" href="/">
              바로가기
            </Button>
          </Card.Body>
        </Card>
        <Card className="mcard2">
          <Card.Img variant="top" src={project2} style={{ height: "190px" }} />
          <Card.Body>
            <Card.Title>Board</Card.Title>
            <Card.Text>
              페이지 기능 : 로그인, 회원가입, 게시판 수정, 삭제, 쓰기
            </Card.Text>

            <Button variant="primary" href="/List">
              바로가기
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Project;
