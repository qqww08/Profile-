import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { gregister } from "../../_actions/user_actions";
import { withRouter } from "react-router-dom";
import google from "./google.png";
import "./soical.css";
function SosialLogin(props) {
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    const Name = response.profileObj.name;
    const Email = response.profileObj.email;

    const body = {
      name: Name,
      email: Email,
    };

    dispatch(gregister(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/");
      } else if (response.payload.register) {
        alert("환영합니다 " + Name + "님 회원가입 되었습니다.");
      }
    });
  };
  return (
    // <GoogleLogin
    //   clientId="601387578460-hsu4jlii1cq8t1tt1gj8at4atu4guu4l.apps.googleusercontent.com"
    //   buttonText="Google Sign in"
    //   onSuccess={responseGoogle}
    //   onFailure={responseGoogle}
    //   cookiePolicy={"single_host_origin"}
    // />
    <GoogleLogin
      clientId="601387578460-hsu4jlii1cq8t1tt1gj8at4atu4guu4l.apps.googleusercontent.com"
      render={(renderProps) => (
        <img
          src={google}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          className="google"
        />
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default withRouter(SosialLogin);
