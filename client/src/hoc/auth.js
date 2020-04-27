import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../_actions/user_actions";

export default function (SpecificComponent, option) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    const post = useSelector((post) => post.state);
    //로그인 확인 기능
    useEffect(() => {
      dispatch(auth()).then((response) => {
        //isAuth 가 false 일시
        if (!response.payload.isAuth) {
          if (option) {
            alert("로그인 해주세요");
            props.history.push("/login");
          }
        }
      });
    });

    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
