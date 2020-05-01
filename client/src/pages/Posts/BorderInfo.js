import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { borderinfo, bdelete } from "../../_actions/post_actions";
import { Spinner, Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import "./css/Info.css";

// import PutDel from "./PutDel";
import Moment from "react-moment";
import "moment-timezone";

function BorderInfo(props) {
  //bootstrap modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = useSelector((state) => state.user);
  //:postId 변수 선언
  const postId = props.match.params.postId;
  //서버에서 확인 할 UserInfo안에 :postId 담기
  const UserInfo = { postId: postId };
  //게시글 정보 변수
  const [Info, setInfo] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    //redux로 서버 전송 후 게시글 정보 서버에서 가지고 오기
    dispatch(borderinfo(UserInfo)).then((response) => {
      //서버에서 success:true 일시
      if (response.payload.success) {
        //setInfo 안에 서버에서 findOne 로 찾은 정보 가지고 오기
        setInfo(response.payload.post);
        //실패시
      } else {
        alert("정보를 찾질 못했습니다");
      }
    });
  }, [dispatch, UserInfo]);
  //삭제 버튼
  const InfoDelete = (event) => {
    event.preventDefault();
    //서버로 UserInfo 삭제 할 정보 보내기
    dispatch(bdelete(UserInfo)).then((response) => {
      //서버에서 success:ture 일시
      if (response.payload.success) {
        props.history.push("/List");
      } else {
        alert("삭제실패");
      }
    });
  };

  // 작성자 정보를 불러오기 전 bootstrap 스피너

  if (!Info.writer && !Info.title) {
    return (
      <div className="info">
        <Spinner animation="border" variant="primary" />
      </div>
    );
    //작성자 정보를 찾은 후
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Form className="fo">
          <Form.Group className="gr">
            <Form.Group
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* :postId로 받아온 게시글 제목 */}
              <Form.Label>제목 {Info.title}</Form.Label>
              {/* 게시판 목록으로 돌아가기 */}
              <Link to="/List">
                <Button variant="secondary">목록</Button>
              </Link>
            </Form.Group>
            <Form.Group
              style={{
                display: "flex",
                marginTop: "10px",
              }}
            >
              {/* :postId로 받아온 게시글 작성자 */}
              <Form.Label>작성자 {Info.writer.name}</Form.Label>
              {/* :postId로 받아온 게시글 작성일 */}
              <Form.Label style={{ marginLeft: "15px" }}>
                작성일
                <Moment format="YYYY.MM.DD HH:mm">{Info.createdAt}</Moment>
              </Form.Label>
            </Form.Group>
          </Form.Group>

          <Form.Group>
            {/* :postId로 받아온 게시글 내용 */}
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              readonly="readonly"
              disabled="disabled"
              style={{
                height: "290px",
                resize: "none",
                background: "none",
                border: "none",
              }}
            >
              {Info.body}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            {/* useSelector 이용해서 작성자 인지 확인 후 수정 삭제 기능 추가*/}
            {user.userData && user.userData._id === Info.writer._id ? (
              <ButtonGroup aria-label="Basic example">
                <Link to={`/edit/${Info._id}`}>
                  <Button variant="primary">수정</Button>
                </Link>
                <Button variant="secondary" onClick={handleShow}>
                  삭제
                </Button>
                {/* 삭제 버튼 클릭시 재확인 modal */}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>알림</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>정말 삭제 하시겠습니까?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={InfoDelete}>
                      삭제
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      취소
                    </Button>
                  </Modal.Footer>
                </Modal>
              </ButtonGroup>
            ) : (
              // 작성자가 아닐시 빈칸
              <div></div>
            )}
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default withRouter(BorderInfo);
