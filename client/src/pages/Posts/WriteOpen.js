import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
// import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postgetOpen } from "../../_actions/post_actions";

function WriteOpen(props) {
  const postId = props.match.params.postId;
  const [Posts, setPosts] = useState([]);
  const body = { postId: postId };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postgetOpen(body)).then(response => {
      if (response.payload.success) {
        // console.log(response.payload.postsOpen);
        console.log(Posts);
        setPosts(response.payload.postsOpen);
      } else {
        console.log("실패");
      }
    });
  }, [dispatch, body]);

  if (Posts.writer) {
    return (
      <div>
        <label>{Posts.title}</label>
        <label>{Posts.writer.name}</label>
      </div>
    );
  } else {
    return <div>afas</div>;
  }
}

export default withRouter(WriteOpen);
