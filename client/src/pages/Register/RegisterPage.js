import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../_actions/user_actions";
import { withRouter } from "react-router-dom";

import "./RegisterPage.css";

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [Message, setMessage] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PassCh, setPassCh] = useState("");

  const NameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const EmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const PassHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const PassChHandler = (event) => {
    setPassCh(event.currentTarget.value);
  };
  const check_spc = /[~!@#$%^&*()_+|<>?:{}]/;
  const check_num = /[0-9]/;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Name) {
      setMessage("이름을 입력해주세요");
    } else if (check_spc.test(Name) || check_num.test(Name)) {
      setMessage("이름에는 특수문자,숫자 입력 불가");
    } else if (!Email) {
      setMessage("이메일을 입력해주세요");
    } else if (!Password) {
      setMessage("패스워드를 입력해주세요");
    } else if (Password !== PassCh) {
      setMessage("패스워드와 패스워드 확인이 일치해야 합니다");
    }

    let body = {
      name: Name,
      email: Email,
      password: Password,
    };
    // console.log(body);

    dispatch(register(body)).then((response) => {
      if (response.payload.success) {
        // console.log(response);
        props.history.push("/login");
        alert("회원가입 완료");
      } else {
        setMessage("이메일 중복 입니다");
        return;
      }
    });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <form
          className="FormBack"
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={submitHandler}
        >
          <h1 style={{ fontSize: "50px", margin: "0px", textAlign: "center" }}>
            회원가입
          </h1>
          <input
            className="inputEmail"
            type="text"
            value={Name}
            onChange={NameHandler}
            placeholder="이름"
            maxLength="6"
          />
          <input
            className="inputEmail"
            type="email"
            value={Email}
            onChange={EmailHandler}
            placeholder="이메일"
          />

          <input
            className="inputPass"
            type="password"
            value={Password}
            minLength="5"
            onChange={PassHandler}
            placeholder="패스워드"
          />

          <input
            className="inputPass"
            type="password"
            value={PassCh}
            onChange={PassChHandler}
            placeholder="패스워드 체크"
          />

          <br />
          <label style={{ color: "red" }}>{Message}</label>
          <button className="btnLogin" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
export default withRouter(RegisterPage);
