import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/user_actions";
import { withRouter } from "react-router-dom";
import Facebook from "../../sns/Facebook";

import "./LoginPage.css";
function LoginPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const emailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const passHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let body = {
      email: Email,
      password: Password,
    };
    dispatch(loginUser(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/");
      } else {
        alert("error");
      }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={submitHandler}
      >
        <input
          className="inputEmail"
          type="email"
          value={Email}
          onChange={emailHandler}
          placeholder="Email"
        />

        <input
          className="inputPass"
          type="password"
          value={Password}
          onChange={passHandler}
          placeholder="Password"
        />

        <a href="/register" style={{ textAlign: "right" }}>
          회원가입
        </a>
        <button className="btnLogin" type="submit">
          Login
        </button>
      </form>
      <Facebook />
    </div>
  );
}
export default withRouter(LoginPage);
