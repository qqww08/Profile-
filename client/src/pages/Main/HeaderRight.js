import React from "react";
import { useSelector } from "react-redux";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";

function HeaderRight(props) {
  const user = useSelector((state) => state.user);
  // const post = useSelector((state) => state.post);
  const onClickHandler = () => {
    Axios.get(`/api/users/logout`).then((response) => {
      if (response.data.success) {
        props.history.push("/Login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };
  if (user.userData && !user.userData.isAuth) {
    return (
      <ButtonGroup aria-label="Basic example">
        <Button variant="link" href="/Login" style={{ textDecoration: "none" }}>
          Login
        </Button>
        <Button
          variant="link"
          href="/Register"
          style={{ textDecoration: "none" }}
        >
          Register
        </Button>
      </ButtonGroup>
    );
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
