import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { borderget } from "../../_actions/post_actions";
import BorderWrite from "./BorderWrite";

function BorderList() {
  const [List, setList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(borderget()).then((response) => {
      if (response.payload.success) {
        console.log(response.payload);
        setList(response.payload.borderlist);
      } else {
        alert("실패");
      }
    });
  }, [dispatch]);

  const Listcheck = List.map((post, index) => {
    return (
      <tbody key={post._id}>
        <tr>
          <td>1</td>
          <td>
            <a href={`/${post._id}`}>{post.title}</a>
          </td>
          <td>{post.writer.name}</td>
          <td>날짜</td>
        </tr>
      </tbody>
    );
  });

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>내용</th>
            <th>이름</th>
            <th>날짜</th>
          </tr>
        </thead>
        {Listcheck}
      </Table>
      <BorderWrite />
    </>
  );
}
export default withRouter(BorderList);
