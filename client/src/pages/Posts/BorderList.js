import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { Element } from "react-scroll";
import { Table, Button, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { borderget, borderpost, mborderget } from "../../_actions/post_actions";
import { Input } from "antd";
import refresh from "./img/refresh.svg";
import "./css/BList.css";
import Moment from "react-moment";
import "moment-timezone";
import Listcheck from "./PostsList";
import Pagination from "./Pagination";
import ScrollAnimation from "react-animate-on-scroll";
function BorderList() {
  //게시판에 올라오는 정보 변수
  const { Search } = Input;
  //웹 리스트
  const [List, setList] = useState([]);
  //모바일 리스트
  const [mlist, setMlist] = useState([]);
  //웹 게시판 페이징 로딩
  const [loading, setLoading] = useState(false);
  //웹 게시판 페이징
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = List.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const dispatch = useDispatch();
  //Search props
  const [Searchv, setSearchv] = useState("");
  //모바일 더보기
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(6);
  const searchHandler = (event) => {
    setSearchv(event.currentTarget.value);
  };

  //글쓰기가 작성 된 후

  //서치 정보
  const updateSearch = () => {
    const body = {
      searchTerm: Searchv,
    };
    dispatch(borderpost(body)).then((response) => {
      //서버에서 success:true 일시
      setLoading(true);
      if (response.payload.success) {
        //서버에서 담고 있는 borderlist를 List 넣기
        setList(response.payload.borderlist);
        setLoading(false);

        //success:false 일시
      } else {
        alert("실패");
      }
    });
  };

  useEffect(() => {
    //웹 게시판 목록 불러오기
    dispatch(borderget()).then((response) => {
      //서버에서 success:true 일시
      setLoading(true);
      if (response.payload.success) {
        //서버에서 담고 있는 borderlist를 List 넣기
        setList(response.payload.borderlist);
        setLoading(false);

        //success:false 일시
      } else {
        alert("실패");
      }
    });
    //모바일 게시판 리스트
    let body = {
      skip: Skip,
      limit: Limit,
    };
    getmborder(body);
  }, []);
  const getmborder = (body) => {
    dispatch(mborderget(body)).then((response) => {
      //서버에서 success:true 일시
      if (response.payload.success) {
        //서버에서 담고 있는 borderlist를 List 넣기
        if (body.loadMore) {
          setMlist([...mlist, ...response.payload.mborderlist]);
        } else {
          setMlist(response.payload.mborderlist);
        }

        //success:false 일시
      } else {
        alert("실패");
      }
    });
  };
  //게시판 새로고침
  const reload = () => {
    dispatch(borderget()).then((response) => {
      //서버에서 success:true 일시
      setLoading(true);
      if (response.payload.success) {
        //서버에서 담고 있는 borderlist를 List 넣기

        setList(response.payload.borderlist);
        setLoading(false);

        //success:false 일시
      } else {
        alert("실패");
      }
    });
  };

  const loadmore = () => {
    let skip = Skip + Limit;
    let body = {
      skip: Skip,
      limit: Limit,
      loadMore: true,
    };
    getmborder(body);
    setSkip(skip);
  };
  // 반응형 웹 전용 게시판 목록
  const Mobile = mlist.map((post, index) => {
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
      <Element id="boader" />
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="none">
          {/* 글쓰기 서치바 */}
          <div className="ListTop">
            <Link to="/Write">
              <Button variant="primary">글쓰기</Button>
            </Link>
            <div>
              <Button
                onClick={reload}
                className="refresh"
                style={{ background: "none", border: "none" }}
              >
                <Image src={refresh} style={{ width: "20px" }} />
              </Button>
              <Search
                placeholder="Search"
                value={Searchv}
                onChange={searchHandler}
                onSearch={updateSearch}
                style={{ width: 200 }}
              />
            </div>
          </div>
          {/* 게시판 목록 */}

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

              <li style={{ margin: "0 auto" }}>
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={List.length}
                  paginate={paginate}
                />
              </li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>
      {/* 반응형 웹, 웹페이지가 작아질 경우 */}
      <div>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className="BEditM">
            <Link to="/Write">
              <Button variant="primary">글쓰기</Button>
            </Link>
            <div>
              <Button
                onClick={reload}
                className="refresh"
                style={{ background: "none", border: "none" }}
              >
                <Image src={refresh} style={{ width: "20px" }} />
              </Button>
              <Search
                placeholder="Search"
                value={Searchv}
                onChange={searchHandler}
                onSearch={updateSearch}
                style={{ width: 200 }}
              />
            </div>
          </div>
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
              <Button
                variant="primary"
                onClick={loadmore}
                style={{ margin: "0px auto" }}
              >
                더보기
              </Button>
            </Table>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default withRouter(BorderList);
