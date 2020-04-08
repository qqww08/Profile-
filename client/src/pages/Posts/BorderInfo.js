import React, { useEffect, useState } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { borderinfo } from "../../_actions/post_actions";
import { Spinner, Button, ButtonGroup, Form } from "react-bootstrap";
import "./css/Info.css";
// import Moment from "react-moment";
// import "moment-timezone";

function BorderInfo(props) {
  const user = useSelector((state) => state.user);
  const postId = props.match.params.postId;
  const UserInfo = { postId: postId };
  const [Info, setInfo] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(borderinfo(UserInfo)).then((response) => {
      if (response.payload.success) {
        setInfo(response.payload.post);
      } else {
        alert("Failed to get video Info");
      }
    });
  }, [dispatch, UserInfo]);

  const InfoDelete = (event) => {
    event.preventDefault();

    Axios.post("/api/posts/delete", UserInfo).then((response) => {
      if (response.data.success) {
        props.history.push("/List");
      } else {
        alert("삭제실패");
      }
    });
  };

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
            <Form.Label>제목 {Info.title}</Form.Label>
            <Form.Group>
              <Form.Label>
                {/* 시간 <Moment format="YY/MM/DD HH:mm">{Info.createdAt}</Moment> */}
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
            <Form.Label>{Info.body}</Form.Label>
          </Form.Group>
          <Form.Group>
            {user.userData._id === Info.writer._id ? (
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" href={`/edit/${Info._id}`}>
                  수정
                </Button>
                <Button variant="secondary" onClick={InfoDelete}>
                  삭제
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
