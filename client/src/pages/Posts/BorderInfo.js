import React, { useEffect, useState } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
function BorderInfo(props) {
  const postId = props.match.params.postId;
  const videoVariable = { postId: postId };
  const [Info, setInfo] = useState([]);

  useEffect(() => {
    Axios.post("/api/posts/info", videoVariable).then(response => {
      if (response.data.success) {
        setInfo(response.data.post);
      } else {
        alert("Failed to get video Info");
      }
    });
  }, [videoVariable]);

  if (Info.writer) {
    return (
      <div>
        <p>{Info.title}</p>
        <p>{Info.body}</p>
        <p>{Info.writer.name}</p>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
}

export default withRouter(BorderInfo);
