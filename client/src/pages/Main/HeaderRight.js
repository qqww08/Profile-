import React from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../Register/RegisterPage";
import { logout } from "../../_actions/user_actions";
import { withRouter, Link } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";

// 로그인 로그아웃 회원가입 버튼 관리
function HeaderRight(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // 로그아웃 기능
  const onClickHandler = () => {
    //서버로 로그아웃 정보 전달
    dispatch(logout()).then((response) => {
      //서버에서 success: true 일시
      if (response.payload.success) {
        props.history.push("/");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };
  //로그인이 아닐시 로그인 버튼 회원가입 버튼 보여주기
  if (user.userData && !user.userData.isAuth) {
    return (
      <ButtonGroup aria-label="Basic example">
        <LoginPage />
        <RegisterPage />
      </ButtonGroup>
    );
    //로그인한 경우 로그아웃 버튼 보여주기
  } else {
    return (
      <Button
        variant="link"
        onClick={onClickHandler}
        style={{ textDecoration: "none" }}
      >
        Logout
      </Button>
    );
  }
}

export default withRouter(HeaderRight);
