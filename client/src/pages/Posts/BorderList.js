import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { borderget } from "../../_actions/post_actions";
import BorderWrite from "./BorderWrite";
import "./css/BList.css";
import Moment from "react-moment";
import "moment-timezone";

function BorderList() {
  const [List, setList] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(borderget()).then((response) => {
      if (response.payload.success) {
        // console.log(response.payload.borderlist);
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
          <td>
            <a href={`/${post._id}`}>{post.title}</a>
          </td>
          <td>{post.writer.name}</td>
          <td>
            <Moment format="YYYY.MM.DD HH:mm">{post.createdAt}</Moment>
          </td>
          <td style={{ textAlign: "center" }}>{post.views}</td>
        </tr>
      </tbody>
    );
  });

  return (
    <div>
      <div className="Blist">
        <Table striped bordered hover size="sm" style={{ width: "800px" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>내용</th>
              <th style={{ width: "15%" }}>작성자</th>
              <th style={{ width: "20%", textAlign: "center" }}>날짜</th>
              <th style={{ width: "10%", textAlign: "center" }}>조회수</th>
            </tr>
          </thead>
          {Listcheck}
        </Table>
      </div>
      <div className="BEdit">
        <div style={{ width: "800px" }}>
          <BorderWrite refesh={refesh} />
        </div>
      </div>
    </div>
  );
}

export default withRouter(BorderList);
