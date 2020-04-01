import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postget } from "../../_actions/post_actions";

function WritePage() {
  const [Posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postget()).then(response => {
      if (response.payload.success) {
        console.log(response.payload);
        setPosts(response.payload.posts);
      } else {
        console.log("실패");
      }
    });
  }, [dispatch]);

  const renderCards = Posts.map((post, index) => {
    return (
      <tbody key={index}>
        <tr>
          <td></td>
          <td>
            <a href={`/post/${post._id}`}>{post.title}</a>
          </td>
          <td>{post.writer.name}</td>
          <td>{post.createdAt}</td>
        </tr>
      </tbody>
    );
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>제 목</th>
          <th>작성자</th>
          <th>날 짜</th>
        </tr>
      </thead>
      {renderCards}
      <a href="/post/Write">
        <button>등록</button>
      </a>
    </Table>
  );
}
export default withRouter(WritePage);
