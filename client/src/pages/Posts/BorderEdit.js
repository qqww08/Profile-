import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { borderinfo } from "../../_actions/post_actions";
import { Spinner } from "react-bootstrap";
import { borderedit } from "../../_actions/post_actions";

function BorderInfo(props) {
  //   const post = useSelector((state) => state.post);
  const postId = props.match.params.postId;
  const UserInfo = { postId: postId };

  const [Info, setInfo] = useState([]);
  const [Title, setTitle] = useState("");
  const dispatch = useDispatch();

  const TitleHanler = (event) => {
    console.log(event.currentTarget.value);
    // console.log(response.payload.post);
    setTitle(event.currentTarget.value);
  };

  useEffect(() => {
    dispatch(borderinfo(UserInfo)).then((response) => {
      if (response.payload.success) {
        console.log(response.payload.post);
        setInfo(response.payload.post);
        setTitle(response.payload.post.title);
      } else {
        alert("실패");
      }
    });
  }, []);
  const BorderEdit = (event) => {
    event.preventDefault();
    const UserEdit = { postId: postId, title: Title };
    console.log(UserEdit);
    dispatch(borderedit(UserEdit)).then((response) => {
      if (response.payload.success) {
        console.log(response.payload.post);
        setTitle(response.payload.post);
        props.history.push("/Main");
      } else {
        alert("실패");
      }
    });
  };

  if (Info.writer) {
    return (
      <form onSubmit={BorderEdit}>
        <input value={Title} onChange={TitleHanler} />
        <button type="submit">수정</button>
        <p>{Info.body}</p>
        <p>{Info.writer.name}</p>
      </form>
    );
  } else {
    return <Spinner animation="border" variant="primary" />;
  }
}

export default withRouter(BorderInfo);
