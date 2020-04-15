import React from "react";

import Bootstrap from "./images/Bootstrap_logo.png";
import { Card, Button } from "react-bootstrap";
import { Element } from "react-scroll";
function Project() {
  return (
    <div>
      <Element id="Project" />
      <h1 className="h1text">Project</h1>
      <div className="cards">
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={Bootstrap} />
          <Card.Body>
            <Card.Title>포트폴리오</Card.Title>
            <Card.Text>
              포트폴리오 <br />
              페이지 기능 : 로그인, 회원가입, 로그아웃
            </Card.Text>
            <Button variant="primary">바로가기</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", marginLeft: "50px" }}>
          <Card.Img variant="top" src={Bootstrap} />
          <Card.Body>
            <Card.Title>Board</Card.Title>
            <Card.Text>
              페이지 기능 : 로그인, 회원가입, 게시판 수정, 삭제, 쓰기
            </Card.Text>
            <Button variant="primary">바로가기</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Project;
