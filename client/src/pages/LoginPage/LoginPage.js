import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { loginUser } from "../../_actions/user_actions";
import { withRouter } from "react-router-dom";

import "./LoginPage.css";
function LoginPage(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
  };
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  // 로그인 페이지 Input
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const emailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const passHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  // 로그인 버튼 클릭
  const submitHandler = (event) => {
    event.preventDefault();
    // useState으로 받은 이메일 패스워드 정보 담기
    let body = {
      email: Email,
      password: Password,
    };
    //서버로 전송
    dispatch(loginUser(body)).then((response) => {
      //서버에서 success:true 일시
      if (response.payload.success) {
        props.history.push("/");

        //서버에서 success:false 일시
      } else {
        alert("가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.");
      }
    });
  };
  return (
    <>
      <Button
        variant="link"
        onClick={handleShow}
        style={{ textDecoration: "none", margin: "0px", color: "black" }}
      >
        로그인
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="FormBack" onSubmit={submitHandler}>
            <label className="LoginTitle">환영합니다</label>
            {/* 로그인 페이지 이메일 Input  */}
            <input
              className="inputEmail"
              type="email"
              value={Email}
              onChange={emailHandler}
              placeholder="이메일"
            />
            {/* 로그인 페이지 패스워드 Input */}
            <input
              className="inputPass"
              type="password"
              value={Password}
              onChange={passHandler}
              placeholder="비밀번호"
            />

            <Button className="btnLogin" type="submit">
              로그인
            </Button>

            {/* <Facebook /> */}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default withRouter(LoginPage);
