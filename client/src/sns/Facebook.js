import React from "react";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { fbUser, fbregister } from "../_actions/user_actions";

function Facebook(props) {
  const dispatch = useDispatch();

  const responseFacebook = (response) => {
    console.log(response);

    let body = {
      name: response.name,
      email: response.email,
      userID: response.userID,
    };
    dispatch(fbUser(body)).then((response) => {
      if (response.payload.success) {
        // console.log(response);
        props.history.push("/");
      } else {
        dispatch(fbregister(body)).then((response) => {
          if (response.payload.success) {
            alert("회원가입 완료");
          } else {
            alert("회원가입 실패");
          }
        });
      }
    });
  };

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
