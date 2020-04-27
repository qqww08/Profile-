import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { borderget } from "../../_actions/post_actions";

import "./css/BList.css";
import Moment from "react-moment";
import "moment-timezone";
import Listcheck from "./PostsList";
import Pagination from "./Pagination";

function BorderList() {
  //게시판에 올라오는 정보 변수
  const [List, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = List.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const dispatch = useDispatch();
  //글쓰기가 작성 된 후

  useEffect(() => {
    //redux로 서버로 전송
    setLoading(true);
    dispatch(borderget()).then((response) => {
      //서버에서 success:true 일시

      if (response.payload.success) {
        //서버에서 담고 있는 borderlist를 List 넣기
        setList(response.payload.borderlist);
        setLoading(false);

        //success:false 일시
      } else {
        alert("실패");
      }
    });
  }, [dispatch]);

  //새로고침 하지 않아도 List에 등록 될 변수 선언

  console.log(List);
  // 반응형 웹 전용 게시판 목록
  const Mobile = List.map((post, index) => {
    return (
      <tbody key={post._id} style={{ width: "100%", tableLayout: "fixed" }}>
        <tr className="Mtr">
          <td className="TitleC1">
            <Link
              to={`/${post._id}`}
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
            </Link>
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
          <Listcheck List={currentPosts} loading={loading} paginate />
        </Table>
      </div>
      <div className="BEdit">
        <ul style={{ width: "800px", display: "flex" }}>
          {/* 글쓰기 버튼에 props 이용해서 정보 넘기기 */}
          <li>
            <Link to="/Write">
              <Button variant="primary">글쓰기</Button>
            </Link>
          </li>
          <li style={{ margin: "0 auto" }}>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={List.length}
              paginate={paginate}
            />
          </li>
        </ul>
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
            <Link to="/Write">
              <Button variant="primary">글쓰기</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(BorderList);
