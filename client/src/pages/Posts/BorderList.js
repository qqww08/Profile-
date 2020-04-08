import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { borderget } from "../../_actions/post_actions";
import BorderWrite from "./BorderWrite";
// import Moment from "react-moment";
// import "moment-timezone";

function BorderList() {
  const [List, setList] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(borderget()).then((response) => {
      if (response.payload.success) {
        console.log(response.payload.borderlist);
        setList(response.payload.borderlist);
      } else {
        alert("실패");
      }
    });
  }, [dispatch]);
  const refesh = (newList) => {
    setList(List.concat(newList));
  };
  const Listcheck = List.map((post, index) => {
    return (
      <tbody key={post._id}>
        <tr>
          <td>1</td>
          <td>
            <a href={`/${post._id}`}>{post.title}</a>
          </td>
          <td>{post.writer.name}</td>
          <td>
            {/* <Moment format="YY/MM/DD HH:mm">{post.createdAt}</Moment> */}
          </td>
          <td>{post.views}</td>
        </tr>
      </tbody>
    );
  });
  if (Listcheck) {
    return (
      <>
        <Table striped bordered hover size="sm" style={{ marginTop: "60px" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>내용</th>
              <th>이름</th>
              <th>날짜</th>
              <th>조회수</th>
            </tr>
          </thead>
          {Listcheck}
        </Table>
        <BorderWrite refesh={refesh} />
      </>
    );
  } else {
    return <div>loading</div>;
  }
}
export default withRouter(BorderList);
