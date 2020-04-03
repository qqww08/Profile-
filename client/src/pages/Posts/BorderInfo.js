import React, { useEffect, useState } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function BorderInfo(props) {
  const user = useSelector(state => state.user);
  const postId = props.match.params.postId;
  const UserInfo = { postId: postId };
  const [Info, setInfo] = useState([]);

  useEffect(() => {
    Axios.post("/api/posts/info", UserInfo).then(response => {
      if (response.data.success) {
        console.log(response.data.post);
        setInfo(response.data.post);
      } else {
        alert("Failed to get video Info");
      }
    });
  }, [UserInfo]);

  const InfoDelete = event => {
    event.preventDefault();

    Axios.post("/api/posts/delete", UserInfo).then(response => {
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
        {user.userData._id === Info.writer._id ? (
          <button onClick={InfoDelete}>삭제</button>
        ) : (
          <div>hi</div>
        )}
      </div>
    );
  } else {
    return <div>loading</div>;
  }
}

export default withRouter(BorderInfo);
