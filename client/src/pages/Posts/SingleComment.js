import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveComment,
  deleteComment,
  putComment,
} from "../../_actions/comment_actions";
import { Image } from "react-bootstrap";
import unimage from "../Main/images/unimage.png";
import { Menu, Dropdown } from "antd";
import {
  InputGroup,
  Form,
  Button,
  ButtonGroup,
  FormControl,
  Modal,
} from "react-bootstrap";
import Moment from "react-moment";
import "moment-timezone";
import commentsvg from "./img/comment.svg";
import { BACK_SERVER_URL } from "../../Config";
import "./css/Comment.css";
import mobilecomment from "./img/mobilecomment.png";
import { set } from "mongoose";
function SingleComment(props) {
  const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const img = props.comment.writer.image;
  const [Refresh, setRefresh] = useState(true);
  const [Body, setBody] = useState(props.comment.content);
  const [PutComment, setPutComment] = useState(false);
  const [ReComment, setReComment] = useState(false);
  const [CommentValue, setCommentValue] = useState("");
  const [DeleteComment, setDeleteComment] = useState("");
  const CommentChange = (event) => {
    setCommentValue(event.currentTarget.value);
  };
  const ReCommentClick = () => {
    setReComment(!ReComment);
  };
  const PutonClick = () => {
    setPutComment(!PutComment);
  };
  const BodyHanler = (event) => {
    setBody(event.currentTarget.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const body = {
      writer: user.userData._id,
      postId: props.postId,
      responseTo: props.comment._id,
      content: CommentValue,
    };
    dispatch(saveComment(body)).then((response) => {
      if (response.payload.success) {
        props.refreshFunction(response.payload.result);
        console.log(response.payload.result);
        setCommentValue("");
        setReComment(false);
      } else {
        alert("저장하지 못했습니다.");
      }
    });
  };
  const puthandler = (event) => {
    event.preventDefault();
    const body = {
      postId: props.comment._id,
      content: Body,
    };
    dispatch(putComment(body)).then((response) => {
      if (response.payload.success) {
        setBody(response.payload.result.content);
        // console.log(response.payload.result);

        setPutComment(false);
      } else {
        alert("저장하지 못했습니다.");
      }
    });
  };
  const commentDelete = () => {
    const postBody = {
      postId: props.comment._id,
      responseTo: props.comment.responseTo,
    };

    dispatch(deleteComment(postBody)).then((response) => {
      if (response.payload.repost) {
        setRefresh(false);
      } else if (response.payload.post) {
        setRefresh(false);
      }
    });
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Form.Label
          style={{
            margin: "0px",
            fontSize: "10px",
            fontWeight: "bold",
            marginRight: "5px",
            cursor: "pointer",
          }}
          onClick={PutonClick}
        >
          수정
        </Form.Label>
      </Menu.Item>
      <Menu.Item key="1">
        <ButtonGroup aria-label="Basic example">
          <Form.Label
            style={{
              margin: "0px",
              fontSize: "10px",
              fontWeight: "bold",
              marginRight: "10px",
              cursor: "pointer",
            }}
            onClick={handleShow}
          >
            삭제
          </Form.Label>
          {/* 삭제 버튼 클릭시 재확인 modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>알림</Modal.Title>
            </Modal.Header>
            <Modal.Body>정말 삭제 하시겠습니까?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={commentDelete}>
                삭제
              </Button>
              <Button variant="primary" onClick={handleClose}>
                취소
              </Button>
            </Modal.Footer>
          </Modal>
        </ButtonGroup>
      </Menu.Item>
    </Menu>
  );
  //댓글 placeholder

  const come = props.comment.writer.name + "님께 답글쓰기";
  return (
    <div>
      {/* 웹 댓글 UI */}
      <div className="webcom">
        <Form>
          {DeleteComment}
          {Refresh && (
            <React.Fragment>
              <Form.Group
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Form.Group style={{ display: "flex", margin: "0px" }}>
                  {img ? (
                    <Image
                      src={`${BACK_SERVER_URL}/${img}`}
                      className="profileImg"
                      roundedCircle
                    />
                  ) : (
                    <Image src={unimage} className="profileImg" />
                  )}
                  <Form.Group style={{ margin: "0px" }}>
                    <Form.Group style={{ margin: "0px" }}>
                      <Form.Label
                        style={{
                          margin: "0px",
                          fontWeight: "bold",
                          marginRight: "10px",
                        }}
                      >
                        {props.comment.writer.name}
                      </Form.Label>

                      {props.Info.writer.email ===
                        props.comment.writer.email && (
                        <Form.Label
                          style={{
                            margin: "0px",
                            fontWeight: "bold",
                            marginRight: "10px",
                            color: "red",
                          }}
                        >
                          작성자
                        </Form.Label>
                      )}

                      <Form.Label
                        style={{ margin: "0px", marginRight: "10px" }}
                      >
                        <Moment format="YYYY.MM.DD HH:mm">
                          {props.comment.createdAt}
                        </Moment>
                      </Form.Label>
                      {user.userData.isAuth ? (
                        <Form.Label style={{ margin: "0px" }}>
                          {ReComment ? (
                            <p
                              style={{ fontWeight: "bold", cursor: "pointer" }}
                              onClick={ReCommentClick}
                            >
                              <img src={commentsvg} style={{ width: "10px" }} />
                              답글 취소
                            </p>
                          ) : (
                            <p
                              style={{ fontWeight: "bold", cursor: "pointer" }}
                              onClick={ReCommentClick}
                            >
                              <img src={commentsvg} style={{ width: "10px" }} />
                              답글
                            </p>
                          )}
                        </Form.Label>
                      ) : (
                        <div></div>
                      )}
                    </Form.Group>

                    {PutComment ? (
                      <InputGroup className="comment">
                        <FormControl
                          as="textarea"
                          aria-label="With textarea"
                          value={Body}
                          onChange={BodyHanler}
                          style={{
                            height: "100px",
                            width: "550px",
                            resize: "none",
                          }}
                        />
                        <InputGroup.Append>
                          <Button
                            variant="outline-secondary"
                            onClick={puthandler}
                          >
                            수정
                          </Button>
                        </InputGroup.Append>
                      </InputGroup>
                    ) : (
                      <Form.Label style={{ margin: "0px", width: "500px" }}>
                        {Body}
                      </Form.Label>
                    )}
                  </Form.Group>
                </Form.Group>
                {props.comment.writer.email === user.userData.email && (
                  <Form.Group style={{ textAlign: "right" }}>
                    {PutComment ? (
                      <Form.Label
                        style={{
                          margin: "0px",
                          fontSize: "13px",
                          fontWeight: "bold",
                          marginRight: "11px",
                          cursor: "pointer",
                        }}
                        onClick={PutonClick}
                      >
                        취소
                      </Form.Label>
                    ) : (
                      <Form.Label
                        style={{
                          margin: "0px",
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginRight: "5px",
                          cursor: "pointer",
                        }}
                        onClick={PutonClick}
                      >
                        수정
                      </Form.Label>
                    )}

                    <ButtonGroup aria-label="Basic example">
                      <Form.Label
                        style={{
                          margin: "0px",
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginRight: "10px",
                          cursor: "pointer",
                        }}
                        onClick={handleShow}
                      >
                        삭제
                      </Form.Label>
                      {/* 삭제 버튼 클릭시 재확인 modal */}
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>알림</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>정말 삭제 하시겠습니까?</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={commentDelete}>
                            삭제
                          </Button>
                          <Button variant="primary" onClick={handleClose}>
                            취소
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </ButtonGroup>
                  </Form.Group>
                )}
              </Form.Group>

              <hr
                style={{
                  border: "0.1px dashed gray",
                  width: "100%",
                  background: "#ccc",
                }}
              />
            </React.Fragment>
          )}
          {ReComment && (
            <InputGroup>
              <FormControl
                as="textarea"
                placeholder={come}
                aria-label="Recipient's username"
                aria-label="With textarea"
                style={{
                  resize: "none",
                  height: "100px",
                  marginBottom: "10px",
                }}
                value={CommentValue}
                onChange={CommentChange}
              />
              <InputGroup.Append style={{ height: "100px" }}>
                <Button variant="outline-secondary" onClick={onSubmit}>
                  등록
                </Button>
              </InputGroup.Append>
            </InputGroup>
          )}
        </Form>
      </div>
      {/* 모바일 댓글 */}
      <div className="mobilecom">
        <Form>
          {DeleteComment}
          {Refresh && (
            <React.Fragment>
              <Form.Group
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Group
                  style={{
                    display: "flex",
                    margin: "0px",
                    alignItems: "center",
                  }}
                >
                  {img ? (
                    <Image
                      src={`${BACK_SERVER_URL}/${img}`}
                      className="McommentImage"
                      roundedCircle
                      style={{ marginBottom: "30px", marginRight: "5px" }}
                    />
                  ) : (
                    <Image
                      src={unimage}
                      roundedCircle
                      className="McommentImage"
                      style={{
                        marginBottom: "30px",
                        marginRight: "5px",
                        border: "1px solid",
                      }}
                    />
                  )}
                  <Form.Group
                    style={{
                      margin: "0px",
                    }}
                  >
                    <Form.Group
                      style={{
                        margin: "0px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <Form.Label
                          style={{
                            margin: "0px",
                            fontWeight: "bold",
                            marginRight: "10px",
                          }}
                        >
                          {props.comment.writer.name}
                        </Form.Label>

                        {props.Info.writer.email ===
                          props.comment.writer.email && (
                          <Form.Label
                            style={{
                              margin: "0px",
                              fontWeight: "bold",
                              marginRight: "5px",
                              fontSize: "10px",
                              color: "red",
                            }}
                          >
                            작성자
                          </Form.Label>
                        )}
                      </div>
                    </Form.Group>

                    {PutComment ? (
                      <InputGroup className="comment">
                        <FormControl
                          as="textarea"
                          aria-label="With textarea"
                          value={Body}
                          onChange={BodyHanler}
                          style={{
                            height: "80px",
                            width: "200px",
                            resize: "none",
                          }}
                        />
                        <InputGroup.Append>
                          <Button
                            variant="outline-secondary"
                            onClick={puthandler}
                            style={{
                              width: "50px",
                              height: "25px",
                              fontSize: "5px",
                            }}
                          >
                            수정
                          </Button>
                        </InputGroup.Append>
                      </InputGroup>
                    ) : (
                      <Form.Label style={{ margin: "0px", width: "500px" }}>
                        {Body}
                      </Form.Label>
                    )}
                    <Form.Group
                      style={{
                        margin: "0px",
                      }}
                    >
                      <Form.Label
                        style={{ margin: "0px", marginRight: "10px" }}
                      >
                        <Moment
                          format="YYYY.MM.DD HH:mm"
                          style={{ margin: "0px" }}
                        >
                          {props.comment.createdAt}
                        </Moment>
                      </Form.Label>
                      {user.userData.isAuth && (
                        <Form.Label
                          style={{ margin: "0px", marginTop: "20px" }}
                        >
                          {ReComment ? (
                            <p
                              style={{
                                fontWeight: "bold",
                                cursor: "pointer",
                                margin: "0px",
                                fontSize: "5px",
                              }}
                              onClick={ReCommentClick}
                            >
                              <img
                                src={commentsvg}
                                style={{
                                  width: "10px",
                                  margin: "0px",
                                }}
                              />
                              답글 취소
                            </p>
                          ) : (
                            <p
                              style={{
                                fontWeight: "bold",
                                cursor: "pointer",
                                margin: "0px",
                                fontSize: "5px",
                              }}
                              onClick={ReCommentClick}
                            >
                              <img
                                src={commentsvg}
                                style={{
                                  width: "10px",
                                  margin: "0px",
                                }}
                              />
                              답글
                            </p>
                          )}
                        </Form.Label>
                      )}
                      {props.comment.writer.email === user.userData.email && (
                        <Form.Label>
                          <Dropdown overlay={menu} trigger={["click"]}>
                            <Image
                              src={mobilecomment}
                              style={{ margin: "0px", cursor: "pointer" }}
                            />
                          </Dropdown>
                        </Form.Label>
                      )}
                    </Form.Group>
                  </Form.Group>
                </Form.Group>
              </Form.Group>

              <hr
                style={{
                  border: "0.1px dashed gray",
                  width: "45%",
                  background: "#ccc",
                  margin: "0px",
                  marginBottom: "10px",
                }}
              />
            </React.Fragment>
          )}
          {ReComment && (
            <InputGroup style={{ width: "240px" }}>
              <FormControl
                as="textarea"
                placeholder={come}
                aria-label="Recipient's username"
                aria-label="With textarea"
                style={{
                  resize: "none",
                  height: "100px",

                  marginBottom: "10px",
                }}
                value={CommentValue}
                onChange={CommentChange}
              />
              <InputGroup.Append style={{ height: "100px" }}>
                <Button variant="outline-secondary" onClick={onSubmit}>
                  등록
                </Button>
              </InputGroup.Append>
            </InputGroup>
          )}
        </Form>
      </div>
    </div>
  );
}

export default SingleComment;
