import React from "react";
import GoogleLogin from "react-google-login";
function SosialLogin() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <GoogleLogin
      clientId="232543166919-tmim3lua0g2d4ogvgmjhpjk7va54s9mk.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default SosialLogin;
