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
import Moment from "react-moment";
import "moment-timezone";
function BorderInfo(props) {
  const user = useSelector((state) => state.user);

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
    console.log(event.currentTarget.value);
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

  if (Info.writer && Info.writer.email && Info.title && Info.body) {
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
          <Form.Group className="gr">
            <Form.Label value={Title} onChange={TitleHanler}>
              제목
            </Form.Label>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={Title}
              onChange={TitleHanler}
              style={{ width: "50%", margin: "0" }}
            />
            <Form.Group>
              <Form.Label>
                시간 <Moment format="YY/MM/DD HH:mm">{Info.createdAt}</Moment>
              </Form.Label>
              <Form.Label
                style={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "right",
                }}
              >
                작성자 {Info.writer.name}
              </Form.Label>
            </Form.Group>
          </Form.Group>

          <Form.Group>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={Body}
              onChange={BodyHanler}
            />
          </Form.Group>
          <Form.Group>
            {user.userData._id === Info.writer._id ? (
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={BorderEdit}>
                  수정
                </Button>
              </ButtonGroup>
            ) : (
              <div>hi</div>
            )}
          </Form.Group>
        </Form>
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
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
}

export default withRouter(BorderInfo);
