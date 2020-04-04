import React, { useEffect, useState } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { borderinfo } from "../../_actions/post_actions";
import { Spinner } from "react-bootstrap";
function BorderInfo(props) {
  const user = useSelector((state) => state.user);
  const postId = props.match.params.postId;
  const UserInfo = { postId: postId };
  const [Info, setInfo] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(borderinfo(UserInfo)).then((response) => {
      if (response.payload.success) {
        setInfo(response.payload.post);
      } else {
        alert("Failed to get video Info");
      }
    });
  }, [UserInfo, dispatch]);

  const InfoDelete = (event) => {
    event.preventDefault();

    Axios.post("/api/posts/delete", UserInfo).then((response) => {
      if (response.data.success) {
        props.history.push("/List");
      } else {
        alert("삭제실패");
      }
    });
  };

  if (Info.writer) {
    return (
      <div>
        <p>{Info.title}</p>
        <p>{Info.body}</p>
        <p>{Info.writer.name}</p>
        {user.userData.email === Info.writer.email ? (
          <button onClick={InfoDelete}>삭제</button>
        ) : (
          <div>hi</div>
        )}
      </div>
    );
  } else {
    return <Spinner animation="border" variant="primary" />;
  }
}

export default withRouter(BorderInfo);
