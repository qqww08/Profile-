import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { bordersave } from "../../_actions/post_actions";

function BorderWrite(props) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [BorderTitle, setBorderTitle] = useState("");
  const [BorderText, setBorderText] = useState("");
  const TitleHandler = event => {
    setBorderTitle(event.currentTarget.value);
  };
  const TextHandler = event => {
    setBorderText(event.currentTarget.value);
  };

  const BoderSubmit = event => {
    event.preventDefault();
    const body = {
      writer: user.userData._id,
      title: BorderTitle,
      body: BorderText
    };
    dispatch(bordersave(body)).then(response => {
      if (response.payload.success) {
        props.history.push("/main");
      } else {
        alert("실패");
      }
    });
  };

  return (
    <div>
      <form onSubmit={BoderSubmit}>
        <input value={BorderTitle} onChange={TitleHandler}></input>
        <textarea value={BorderText} onChange={TextHandler}></textarea>
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default withRouter(BorderWrite);
