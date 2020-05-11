import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import "moment-timezone";
import { useDispatch } from "react-redux";
import { getComment } from "../../_actions/comment_actions";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

function PostsList(props) {
  if (props.loading) {
    return (
      <div
        style={{
          width: "800px",
          display: "flex",
          justifyContent: "center",
          height: "350px",
          alignItems: "center",
        }}
      >
        <Spinner animation="border" variant="primary" />;
      </div>
    );
  }

  return props.List.map((post) => (
    <tbody key={post._id} style={{ width: "800px", tableLayout: "fixed" }}>
      <tr>
        {/* 게시판 제목 */}
        <td className="TitleC1">
          <Link
            to={`/${post._id}`}
            style={{
              listStyleType: "none",
              textDecoration: "none",
              color: "black",
            }}
          >
            {post.title}
          </Link>
        </td>
        {/* 게시판 작성자 */}
        <td>{post.writer.name}</td>
        {/* 게시판 날짜 */}
        <td>
          <Moment format="YYYY.MM.DD HH:mm">{post.createdAt}</Moment>
        </td>
      </tr>
    </tbody>
  ));
}
export default PostsList;
