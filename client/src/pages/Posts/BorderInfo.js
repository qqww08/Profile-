import React, { useEffect, useState } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { borderinfo } from "../../_actions/post_actions";
import { Spinner, Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import "./css/Info.css";
// import PutDel from "./PutDel";
import Moment from "react-moment";
import "moment-timezone";

function BorderInfo(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = useSelector((state) => state.user);
  // const post = useSelector((state) => state.post);
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
          <Form.Group className="gr">
            <Form.Label>제목 {Info.title}</Form.Label>
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
            <Form.Label>{Info.body}</Form.Label>
          </Form.Group>
          <Form.Group>
            {user.userData && user.userData._id === Info.writer._id ? (
              <ButtonGroup aria-label="Basic example">
                <Button variant="primary" href={`/edit/${Info._id}`}>
                  수정1
                </Button>

                <Button variant="secondary" onClick={handleShow}>
                  삭제
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>정말 삭제 하시겠습니까?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={InfoDelete}>
                      삭제
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      취소
                    </Button>
                  </Modal.Footer>
                </Modal>
              </ButtonGroup>
            ) : (
              <div></div>
            )}
            {/* <PutDel {Info}/> */}
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default withRouter(BorderInfo);
