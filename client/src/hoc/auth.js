import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_actions";
import { headersConfig } from "../Config";
export default function (SpecificComponent, option) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    //로그인 확인 기능
    useEffect(() => {
      dispatch(auth(headersConfig)).then((response) => {
        //isAuth 가 false 일시
        if (!response.payload.isAuth) {
          if (option) {
            alert("로그인 해주세요");
            props.history.push("/");
          }
        }
      });
    });

    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
