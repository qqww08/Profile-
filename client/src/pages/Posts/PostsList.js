import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
const Listcheck = ({ List, loading }) => {
  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  return List.map((post) => (
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
};
export default Listcheck;
