import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import project1 from "./images/project1.PNG";
import project2 from "./images/project2.PNG";
import project3 from "./images/project3.PNG";
import project4 from "./images/project4.PNG";
import project5 from "./images/project5.PNG";
import { Button, Carousel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./css/projectDetail.css";
import Profile from "./Contact";

function ProjectDetail() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ textDecoration: "none", margin: "0px", color: "black" }}
      >
        자세히
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>포트폴리오</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel style={{ width: "50%", margin: "0px auto" }}>
            <Carousel.Item>
              <Zoom>
                <img
                  className="d-block w-100
                 detailimg"
                  src={project1}
                  alt="First slide"
                />
              </Zoom>
            </Carousel.Item>
            <Carousel.Item>
              <Zoom>
                <img
                  className="d-block w-100 detailimg"
                  src={project2}
                  alt="Third slide"
                />
              </Zoom>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 detailimg"
                src={project3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Zoom>
                <img
                  className="d-block w-100 detailimg"
                  src={project4}
                  alt="Third slide"
                />
              </Zoom>
            </Carousel.Item>
            <Carousel.Item>
              <Zoom>
                <img
                  className="d-block w-100 detailimg"
                  src={project5}
                  alt="Third slide"
                />
              </Zoom>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
        <div style={{ overflow: "scroll", width: "100%", height: "400px" }}>
          <Modal.Body>
            <div className="projectDe">
              <p className="projectfont">
                독학을 시작 하면서 일단 부딪혀 보자는 생각으로 무작정 만들게된
                포트폴리오 입니다.
              </p>
              <p className="profileText">제작기간</p>
              <p style={{ paddingLeft: "15px" }}>20.03.16 ~</p>

              <p className="profileText">목표</p>
              <p style={{ paddingLeft: "15px" }}>
                Git,React,nodeJs,expressJs,MongoDb 등 처음 사용 해보는
                프레임워크, 라이브러리를 활용해서 동적인 웹페이지 제작 해서
                배포까지 하기
              </p>
              <p className="profileText">Stack</p>
              <li type="disc">Reaect(Hooks,ES6 활용)</li>
              <li type="disc">MongoDB</li>
              <li type="disc">nodeJS</li>
              <li type="disc">expressJS</li>
              <li type="disc">Redux(Redux-thrunk)</li>
              <li type="disc">Bootstrap</li>
              <p className="profileText">etc</p>
              <li type="disc">AWS EC2</li>
              <p className="profileText">주요기능</p>
              <li type="disc">로그인 기능</li>
              <li type="circle" style={{ paddingLeft: "30px" }}>
                JWT를 이용해 토큰 생성
              </li>
              <li type="circle" style={{ paddingLeft: "30px" }}>
                소셜 로그인 기능
              </li>
              <li type="circle" style={{ paddingLeft: "30px" }}>
                프로필 사진 변경 기능
              </li>
              <li type="disc">회원가입 기능</li>
              <li type="circle" style={{ paddingLeft: "30px" }}>
                Bcrypt를 이용해서 패스워드 암호화
              </li>
              <li type="circle" style={{ paddingLeft: "30px" }}>
                Dropzone 과 multer 을 이용한 프로필 사진 업로드 기능
              </li>

              <li type="disc">게시판CRUD</li>
              <li type="circle" style={{ paddingLeft: "30px" }}>
                게시글 작성자만 수정 삭제 가능
              </li>
              <li type="circle" style={{ paddingLeft: "30px" }}>
                검색, 페이징, 리셋 기능
              </li>
              <li type="circle" style={{ paddingLeft: "30px" }}>
                댓글, 수정, 삭제 ,작성자 식별 기능
              </li>
              <li type="disc">모바일 게시판CRUD</li>

              <li type="circle" style={{ paddingLeft: "30px" }}>
                모바일 게시판 더보기 기능
              </li>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default ProjectDetail;
