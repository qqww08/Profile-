import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { bordersave } from "../../_actions/post_actions";
import { Button, Modal, Form } from "react-bootstrap";

function BorderWrite(props) {
  //Bootstrap modal 초기 설정
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //user 정보를 가지고 오기 위해 선언
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //글쓰기 제목 내용 value 안에 담을 변수 선언
  const [BorderTitle, setBorderTitle] = useState("");
  const [BorderText, setBorderText] = useState("");
  //제목 내용 onChange 될 시 value 바꾸기
  const TitleHandler = (event) => {
    setBorderTitle(event.currentTarget.value);
  };
  const TextHandler = (event) => {
    setBorderText(event.currentTarget.value);
  };
  //등록 버튼 클릭 시
  const BoderSubmit = (event) => {
    event.preventDefault();
    //제목 안에 빈칸 확인
    if (!BorderTitle) {
      alert("제목을 입력해주세요");
    } else {
      //서버에 전송될 정보 body 안에 담기
      const body = {
        //서버에 전송 될 정보
        writer: user.userData._id,
        title: BorderTitle,
        body: BorderText,
      };
      //redux로 서버로 전송
      dispatch(bordersave(body)).then((response) => {
        //서버에서 success: true 일시
        if (response.payload.success) {
          //등록 버튼 누른 후 success:true 일시 modal 닫기
          setShow(false);
          //다음 작성을 위해 제목 내용 값 제거
          setBorderTitle("");
          setBorderText("");
          //props 로 게시판 에 서버에 저장된 글 refesh
          props.refesh(response.payload.result);
          //실패시
        } else {
          // console.log(response);
          alert("실패");
        }
      });
    }
  };

  return (
    // bootstrap modal 글쓰기 버튼
    <Form onSubmit={BoderSubmit}>
      <Button variant="primary" onClick={handleShow}>
        글쓰기
      </Button>
      {/* 모달 타이틀 */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>글쓰기</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ width: "100%" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>제목</Form.Label>
            {/* 제목 Input 정보 */}
            <Form.Control
              placeholder="제목"
              value={BorderTitle}
              onChange={TitleHandler}
              minLength="2"
              maxLength="30"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>내용</Form.Label>
            {/* 내용 Input 정보 */}
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              placeholder="내용"
              value={BorderText}
              onChange={TextHandler}
              style={{ height: "400px", resize: "none" }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={BoderSubmit}>
            등록
          </Button>
          <Button variant="primary" onClick={handleClose}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}

export default withRouter(BorderWrite);
