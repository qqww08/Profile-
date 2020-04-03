import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { borderget } from "../../_actions/post_actions";

function BorderWrite() {
  const [List, setList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(borderget()).then(response => {
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
          <td>@mdo</td>
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        {Listcheck}
      </Table>
      <a href="/Write">
        <button>qq</button>
      </a>
    </>
  );
}
export default withRouter(BorderWrite);
