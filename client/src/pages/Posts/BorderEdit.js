import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { borderinfo } from "../../_actions/post_actions";
import { borderedit } from "../../_actions/post_actions";
import {
  Spinner,
  Button,
  ButtonGroup,
  Form,
  FormControl,
} from "react-bootstrap";
import Moment from "react-moment";
import "moment-timezone";
import "./css/BEdit.css";

function BorderInfo(props) {
  //:postId 변수 선언
  const user = useSelector((state) => state.user);
  const postId = props.match.params.postId;
  //서버에서 확인 할 UserInfo안에 :postId 담기
  const UserInfo = { postId: postId };
  //게시글 정보 변수
  const [Info, setInfo] = useState([]);
  const [Title, setTitle] = useState("");
  const [Body, setBody] = useState("");
  const dispatch = useDispatch();

  const TitleHanler = (event) => {
    setTitle(event.currentTarget.value);
  };
  const BodyHanler = (event) => {
    setBody(event.currentTarget.value);
  };
  useEffect(() => {
    //게시글 정보 가지고 오기
    dispatch(borderinfo(UserInfo)).then((response) => {
      if (response.payload.success) {
        setInfo(response.payload.post);
        setTitle(response.payload.post.title);
        setBody(response.payload.post.body);
      } else {
        alert("실패");
      }
    });
  }, []);
  //수정 버튼 클릭 후
  const BorderEdit = (event) => {
    event.preventDefault();
    //수정된 제목, 타이틀 정보 UserEdit에 담기
    const UserEdit = { postId: postId, title: Title, body: Body };
    //서버로 수정된 정보 전송
    dispatch(borderedit(UserEdit)).then((response) => {
      //서버에서 success:true 일시
      if (response.payload.success) {
        //제목, 내용에 수정된 정보 담기
        setTitle(response.payload.post);
        setBody(response.payload.post);
        //수정된 게시글 이동
        props.history.push(`/${postId}`);
      } else {
        //실패시
        alert("실패");
      }
    });
  };
  //게시글 정보 불러오기전 bootstrap 스피너

  if ((!Info.writer && !Info.title) || !user.userData.isAuth) {
    return (
      <div className="info">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  } else {
    return (
      <div className="info">
        <Form className="fo">
          <Form.Group>
            <Form.Group className="EditTitle">
              <Form.Label
                value={Title}
                onChange={TitleHanler}
                style={{ width: "40px" }}
              >
                제목
              </Form.Label>
              <FormControl
                value={Title}
                onChange={TitleHanler}
                className="EditInput1"
              />
            </Form.Group>
            <Form.Group
              style={{
                display: "flex",
                justifyContent: "end",
                textAlign: "right",
              }}
            >
              <Form.Label>작성자 {Info.writer.name}</Form.Label>
              <Form.Label style={{ marginLeft: "15px" }}>
                작성일 <Moment format="YY/MM/DD HH:mm">{Info.createdAt}</Moment>
              </Form.Label>
            </Form.Group>
          </Form.Group>
          <Form.Group>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              value={Body}
              onChange={BodyHanler}
              style={{ height: "290px", resize: "none" }}
            />
          </Form.Group>
          <Form.Group>
            <ButtonGroup aria-label="Basic example">
              <Button variant="primary" onClick={BorderEdit}>
                수정
              </Button>
              <Link to="/">
                <Button variant="secondary">취소</Button>
              </Link>
            </ButtonGroup>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default withRouter(BorderInfo);
