import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
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
// import Moment from "react-moment";
// import "moment-timezone";
function BorderInfo(props) {
  // const user = useSelector((state) => state.user);

  const postId = props.match.params.postId;
  const UserInfo = { postId: postId };

  const [Info, setInfo] = useState([]);
  const [Title, setTitle] = useState("");
  const [Body, setBody] = useState("");
  const dispatch = useDispatch();

  const TitleHanler = (event) => {
    // console.log(event.currentTarget.value);
    // console.log(response.payload.post);
    setTitle(event.currentTarget.value);
  };
  const BodyHanler = (event) => {
    // console.log(event.currentTarget.value);
    // console.log(response.payload.post);
    setBody(event.currentTarget.value);
  };
  useEffect(() => {
    dispatch(borderinfo(UserInfo)).then((response) => {
      if (response.payload.success) {
        // console.log(response.payload.post);
        setInfo(response.payload.post);
        setTitle(response.payload.post.title);
        setBody(response.payload.post.body);
      } else {
        alert("실패");
      }
    });
  }, []);
  const BorderEdit = (event) => {
    event.preventDefault();
    const UserEdit = { postId: postId, title: Title, body: Body };
    // console.log(UserEdit);
    dispatch(borderedit(UserEdit)).then((response) => {
      if (response.payload.success) {
        // console.log(response.payload.post);
        setTitle(response.payload.post);
        setBody(response.payload.post);
        props.history.push(`/${postId}`);
      } else {
        alert("실패");
      }
    });
  };

  // return (
  //   <form onSubmit={BorderEdit}>
  //     <input value={Title} onChange={TitleHanler} />
  //     <button type="submit">수정</button>
  //     <p>{Info.body}</p>
  //     <p>{Info.writer.name}</p>
  //   </form>
  // );

  if (!Info.writer && !Info.title) {
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
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Form className="fo">
          <Form.Group>
            <Form.Group className="EditTitle">
              <Form.Label value={Title} onChange={TitleHanler}>
                제목
              </Form.Label>
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                value={Title}
                onChange={TitleHanler}
                style={{ width: "95%", marginBottom: "5px" }}
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
                {/* 작성일 <Moment format="YY/MM/DD HH:mm">{Info.createdAt}</Moment> */}
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
              <Button variant="secondary" onClick={BorderEdit}>
                수정
              </Button>
            </ButtonGroup>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default withRouter(BorderInfo);
