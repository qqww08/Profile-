import React from "react";
import FacebookLogin from "react-facebook-login";

function SosialLogin() {
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div>
      <FacebookLogin
        appId="1298858200311362"
        autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
}

export default SosialLogin;
