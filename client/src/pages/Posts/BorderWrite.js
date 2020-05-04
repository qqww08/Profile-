import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { bordersave } from "../../_actions/post_actions";
import {
  Spinner,
  Button,
  ButtonGroup,
  FormControl,
  Form,
} from "react-bootstrap";

function BorderWrite(props) {
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

  const goBack = () => {
    props.history.goBack();
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

          //다음 작성을 위해 제목 내용 값 제거
          setBorderTitle("");
          setBorderText("");
          //props 로 게시판 에 서버에 저장된 글 refesh
          // props.refesh(response.payload.result);
          props.history.push("/List");
          //실패시
        } else {
          // console.log(response);
          alert("실패");
        }
      });
    }
  };
  if (!user.userData.isAuth) {
    return (
      <div className="info">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  } else {
    return (
      <div className="info">
        <Form className="fo">
          <Form.Group>
            <Form.Group className="EditTitle">
              <Form.Label style={{ width: "40px" }}>제목</Form.Label>
              <FormControl
                value={BorderTitle}
                onChange={TitleHandler}
                className="EditInput1"
              />
            </Form.Group>
            <Form.Group
              style={{
                display: "flex",
                justifyContent: "end",
                textAlign: "right",
              }}
            ></Form.Group>
          </Form.Group>
          <Form.Group>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              value={BorderText}
              onChange={TextHandler}
              style={{ height: "290px", resize: "none" }}
            />
          </Form.Group>
          <Form.Group>
            <ButtonGroup aria-label="Basic example">
              <Button variant="primary" onClick={BoderSubmit}>
                등록
              </Button>

              <Button variant="secondary" onClick={goBack}>
                취소
              </Button>
            </ButtonGroup>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default withRouter(BorderWrite);
