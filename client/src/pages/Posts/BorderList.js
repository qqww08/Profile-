import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Table, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { borderget } from "../../_actions/post_actions";
import BorderWrite from "./BorderWrite";
import "./css/BList.css";
import Moment from "react-moment";
import "moment-timezone";

function BorderList() {
  const [List, setList] = useState([]);
  const user = useSelector((state) => state.user);
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
  if (user.userData && !user.userData.isAuth) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spinner animation="border" variant="primary" />
      </div>
    );
  } else {
    const Listcheck = List.map((post, index) => {
      return (
        <tbody key={post._id}>
          <tr>
            <td className="TitleC1">
              <a
                href={`/${post._id}`}
                style={{
                  listStyleType: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                {post.title}
              </a>
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
    console.log(Listcheck);
    return (
      <div>
        <div className="Blist">
          <Table striped bordered hover size="sm" style={{ width: "800px" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "center", width: "300px" }}>내용</th>
                <th style={{ width: "150px" }}>작성자</th>
                <th style={{ width: "200px", textAlign: "center" }}>날짜</th>
                <th style={{ width: "100px", textAlign: "center" }}>조회수</th>
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
}

export default withRouter(BorderList);
