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
        <tbody key={post._id} style={{ width: "800px", tableLayout: "fixed" }}>
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
    const Mobile = List.map((post, index) => {
      return (
        <tbody key={post._id} style={{ width: "100%", tableLayout: "fixed" }}>
          <tr className="Mtr">
            <td className="TitleC1">
              <a
                href={`/${post._id}`}
                style={{
                  listStyleType: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <p style={{ margin: "0px" }}>{post.title}</p>
                <p style={{ margin: "0px" }}>
                  {post.writer.name}{" "}
                  <Moment format="YYYY.MM.DD HH:mm">{post.createdAt}</Moment>
                </p>
              </a>
            </td>

            <td className="MView">{post.views}</td>
          </tr>
        </tbody>
      );
    });

    return (
      <div>
        <div className="Blist">
          <Table
            striped
            bordered
            hover
            size="sm"
            style={{ width: "800px", tableLayout: "fixed" }}
          >
            <thead>
              <tr>
                <th style={{ textAlign: "center", width: "300px" }}>내용</th>
                <th style={{ width: "150px" }}>작성자</th>
                <th style={{ width: "150px", textAlign: "center" }}>날짜</th>
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

        <div>
          <div className="BMobile">
            <Table
              striped
              bordered
              hover
              size="sm"
              style={{ width: "800px", tableLayout: "fixed" }}
            >
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>전체글</th>
                </tr>
              </thead>
              {Mobile}
            </Table>
          </div>
          <div className="BEditM">
            <div style={{ width: "800px" }}>
              <BorderWrite refesh={refesh} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BorderList);
