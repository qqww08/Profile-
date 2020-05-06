import React, { useState } from "react";
import GoogleLogin from "react-google-login";
// import { useDispatch } from "react-redux";
import { fbregister } from "../../_actions/user_actions";
function SosialLogin() {
  //   const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  //   const [Token, setToken] = useState("");
  const responseGoogle = (response) => {
    setEmail(response.profileObj.email);
    setName(response.profileObj.name);

    console.log(Email);
    console.log(Name);
    // setToken(response.accessToken);
    // const body = {
    //   email: Email,
    //   name: Name,
    //   token: Token,
    // };

    // dispatch(fbregister(body)).then((response) => {
    //   if (response.payload.login) {
    //     // console.log(response);
    //     alert("로그인 완료");
    //   } else if (response.payload.register) {
    //     alert("회원가입 완료");
    //   }
    // });
  };
  return (
    <GoogleLogin
      clientId="601387578460-hsu4jlii1cq8t1tt1gj8at4atu4guu4l.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default SosialLogin;
