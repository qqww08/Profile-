import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import plus from "../Register/plus.png";
import { withRouter } from "react-router-dom";
import "./ProfileEdit.css";
import { profileedit } from "../../_actions/user_actions";
import ProfileDrop from "./ProfileDrop";

function ProfileEdit(props) {
  const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };
  const dispatch = useDispatch();
  //회원가입 정보를 받아오기 위해 useState 받아올 변수 선언
  const [Message, setMessage] = useState("");
  const [Chpassword, setChpassword] = useState("");
  const [Password, setPassword] = useState("");
  const [PassCh, setPassCh] = useState("");
  const [Image, setImage] = useState(user.userData.image);
  //onChange 된 value 값 을 useState 로 받아오기
  const ChPassHandler = (event) => {
    setChpassword(event.currentTarget.value);
  };
  const PassHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const PassChHandler = (event) => {
    setPassCh(event.currentTarget.value);
  };
  const imageState = (newImage) => {
    setImage(newImage);
  };
  const EditSubmit = (event) => {
    event.preventDefault();
    let body = {
      _id: user.userData._id,
      email: user.userData.email,
      password: Password,
      chpassword: Chpassword,
      image: Image,
    };
    if (!Password) {
      setMessage("현재 패스워드를 입력하세요.");
    } else if (!Chpassword) {
      setMessage("변경할 패스워드를 입력하세요.");
    } else if (Chpassword !== PassCh) {
      setMessage("패스워드와 패스워드 체크가 일치해야 합니다");
    } else {
      dispatch(profileedit(body)).then((response) => {
        if (response.payload.success) {
          setShow(false);
          console.log(response.payload.userInfo);
          props.history.push("/");
        } else {
          setMessage("현재 패스워드가 잃지 하지 않습니다.");
        }
      });
    }
  };
  return (
    <>
      <Button
        variant="link"
        onClick={handleShow}
        style={{ textDecoration: "none", margin: "0px", color: "black" }}
      >
        정보수정
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>환영합니다</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            className="FormBack"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h1
              style={{ fontSize: "50px", margin: "0px", textAlign: "center" }}
            >
              회원정보
            </h1>
            <ProfileDrop imageFunction={imageState} />
            {/* 회원가입 페이지 이름 Input */}
            <Form.Label className="profileLabel" type="text">
              {user.userData.name}
            </Form.Label>
            {/* 회원가입 페이지 이메일 Input */}
            <Form.Label className="profileLabel" type="text">
              {user.userData.email}
            </Form.Label>
            {/* 회원가입 페이지 패스워드 Input */}
            <input
              className="inputPass"
              type="password"
              value={Password}
              minLength="5"
              onChange={PassHandler}
              placeholder="현재 패스워드"
            />
            <input
              className="inputPass"
              type="password"
              value={Chpassword}
              minLength="5"
              onChange={ChPassHandler}
              placeholder="변결할 패스워드"
            />
            {/* 회원가입 페이지 패스워드 체크 Input */}
            <input
              className="inputPass"
              type="password"
              value={PassCh}
              onChange={PassChHandler}
              placeholder="패스워드 체크"
            />

            <br />
            <label style={{ color: "red", margin: "0px", padding: "0px" }}>
              {Message}
            </label>
            {/* 회원가입 페이지 회원가입 버튼 */}
            <Button className="btnLogin" onClick={EditSubmit}>
              정보수정
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default withRouter(ProfileEdit);
