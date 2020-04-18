import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../_actions/user_actions";
import { withRouter } from "react-router-dom";

import "./RegisterPage.css";

function RegisterPage(props) {
  //dispatch 사용하기 위해 선언
  const dispatch = useDispatch();
  //회원가입 정보를 받아오기 위해 useState 받아올 변수 선언
  const [Message, setMessage] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PassCh, setPassCh] = useState("");

  //onChange 된 value 값 을 useState 로 받아오기
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
  //특수문자, 숫자 확인 변수 선언
  const check_spc = /[~!@#$%^&*()_+|<>?:{}]/;
  const check_num = /[0-9]/;

  //회원가입 버튼 후
  const submitHandler = (event) => {
    event.preventDefault();

    //Input 태그 빈칸 및 특수문자 체크
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
    //Input 입력 된 정보를 body 안에 담기
    let body = {
      name: Name,
      email: Email,
      password: Password,
    };
    // console.log(body);
    //회원가입을 위해 redux 를 이용해 서버로 전송
    dispatch(register(body)).then((response) => {
      //서버에서 success: ture 일시
      if (response.payload.success) {
        // console.log(response);
        props.history.push("/login");
        alert("회원가입 완료");
        //서버에서 success:false 일시
      } else {
        setMessage("이메일 중복 입니다");
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
          {/* 회원가입 페이지 이름 Input */}
          <input
            className="inputEmail"
            type="text"
            value={Name}
            onChange={NameHandler}
            placeholder="이름"
            maxLength="6"
          />
          {/* 회원가입 페이지 이메일 Input */}
          <input
            className="inputEmail"
            type="email"
            value={Email}
            onChange={EmailHandler}
            placeholder="이메일"
          />
          {/* 회원가입 페이지 패스워드 Input */}
          <input
            className="inputPass"
            type="password"
            value={Password}
            minLength="5"
            onChange={PassHandler}
            placeholder="패스워드"
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
          <button className="btnLogin" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
export default withRouter(RegisterPage);
