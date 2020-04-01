import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postup } from "../../_actions/post_actions";
import { withRouter } from "react-router-dom";

function Write(props) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [TitleText, setTitleText] = useState("");
  const [AreaText, setAreaText] = useState("");

  const TitleHandler = event => {
    setTitleText(event.currentTarget.value);
  };
  const AreaHandler = event => {
    setAreaText(event.currentTarget.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    let data = {
      writer: user.userData._id,
      title: TitleText,
      body: AreaText
    };

    dispatch(postup(data)).then(response => {
      if (response.payload.success) {
        console.log(response.data);
        props.history.push("/Main");
      } else {
        console.log("실패");
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
          height: "100vh"
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={submitHandler}
        >
          <input
            value={TitleText}
            onChange={TitleHandler}
            placeholder="Email"
          />
          <textarea onChange={AreaHandler} value={AreaText} />
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
export default withRouter(Write);
