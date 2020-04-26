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
  //게시판에 올라오는 정보 변수
  const [List, setList] = useState([]);

  const dispatch = useDispatch();
  //글쓰기가 작성 된 후
  useEffect(() => {
    //redux로 서버로 전송
    dispatch(borderget()).then((response) => {
      //서버에서 success:true 일시
      if (response.payload.success) {
        //서버에서 담고 있는 borderlist를 List 넣기
        setList(response.payload.borderlist);
        //success:false 일시
      } else {
        alert("실패");
      }
    });
  }, [dispatch]);
  //새로고침 하지 않아도 List에 등록 될 변수 선언
  const refesh = (newList) => {
    setList(List.concat(newList));
  };

  //map을 이용해서 게시판 목록에 등록 될 내용 등록
  const Listcheck = List.map((post, index) => {
    return (
      <tbody key={post._id} style={{ width: "800px", tableLayout: "fixed" }}>
        <tr>
          {/* 게시판 제목 */}
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
          {/* 게시판 작성자 */}
          <td>{post.writer.name}</td>
          {/* 게시판 날짜 */}
          <td>
            <Moment format="YYYY.MM.DD HH:mm">{post.createdAt}</Moment>
          </td>
        </tr>
      </tbody>
    );
  });

  // 반응형 웹 전용 게시판 목록
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
              <p style={{ margin: "0px", fontSize: "11px", color: "gray" }}>
                {post.writer.name}
                <Moment format="YYYY.MM.DD HH:mm">{post.createdAt}</Moment>
              </p>
            </a>
          </td>
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
            </tr>
          </thead>
          {Listcheck}
        </Table>
      </div>
      <div className="BEdit">
        <div style={{ width: "800px" }}>
          {/* 글쓰기 버튼에 props 이용해서 정보 넘기기 */}
          <BorderWrite refesh={refesh} />
        </div>
      </div>
      {/* 반응형 웹, 웹페이지가 작아질 경우 */}
      <div>
        <div className="BMobile">
          <Table
            striped
            bordered
            hover
            size="sm"
            style={{ width: "100%", tableLayout: "fixed" }}
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

export default withRouter(BorderList);
