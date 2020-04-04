import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_actions";

export default function (SpecificComponent, option) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push("/");
          }
        }
      });
    });

    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
