import React from "react";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { facebook, facebook_reg } from "../_actions/user_actions";

function Facebook(props) {
  const dispatch = useDispatch();

  const responseFacebook = response => {
    console.log(response);

    let body = {
      name: response.name,
      email: response.email,
      userID: response.userID
    };
    dispatch(facebook_reg(body)).then(response => {
      if (response.payload.success) {
        alert("회원가입 완료");
      }
    });
    dispatch(facebook(body)).then(response => {
      if (response.payload.success) {
        // console.log(response);
        props.history.push("/Main");
      } else {
        console.log("실패");
      }
    });
  };

  //   dispatch(register(body)).then(response => {
  //     if (response.payload.success) {
  //       props.history.push("/");
  //     }
  //   });
  return (
    <FacebookLogin
      appId="1298858200311362"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
}
export default withRouter(Facebook);
