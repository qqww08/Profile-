import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveComment, deleteComment } from "../../_actions/comment_actions";
import { Image } from "react-bootstrap";
import unimage from "../Main/images/unimage.svg";
import { InputGroup, Form, Button, FormControl } from "react-bootstrap";
import Moment from "react-moment";
import "moment-timezone";
import commentsvg from "./img/comment.svg";
function SingleComment(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const img = props.comment.writer.image;
  const [Refresh, setRefresh] = useState(true);
  const [ReComment, setReComment] = useState(false);
  const [CommentValue, setCommentValue] = useState("");
  console.log(props.comment);
  const CommentChange = (event) => {
    setCommentValue(event.currentTarget.value);
  };
  const ReCommentClick = () => {
    setReComment(!ReComment);
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
        setRefresh(response.payload.result);
        setCommentValue("");
        setReComment(false);
      } else {
        alert("저장하지 못했습니다.");
      }
    });
  };

  const commentDelete = () => {
    const postBody = { postId: props.comment._id };

    dispatch(deleteComment(postBody)).then((response) => {
      if (response.payload.success) {
        setRefresh(false);
      } else {
        alert("삭제 실패");
      }
    });
  };
  //댓글 placeholder
  const come = props.comment.writer.name + "님께 답글쓰기";
  return (
    <Form>
      {Refresh && (
        <React.Fragment>
          <Form.Group
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Form.Group style={{ display: "flex", margin: "0px" }}>
              {img ? (
                <Image
                  src={`https://profile1234.herokuapp.com/${img}`}
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

                  {props.Info.writer.email === props.comment.writer.email && (
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

                  <Form.Label style={{ margin: "0px", marginRight: "10px" }}>
                    <Moment format="YYYY.MM.DD HH:mm">
                      {props.comment.createdAt}
                    </Moment>
                  </Form.Label>
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
                </Form.Group>
                <Form.Label style={{ margin: "0px" }}>
                  {props.comment.content}
                </Form.Label>
              </Form.Group>
            </Form.Group>
            <Form.Group style={{ textAlign: "right" }}>
              <Form.Label
                style={{
                  margin: "0px",
                  fontSize: "10px",
                  fontWeight: "bold",
                  marginRight: "5px",
                }}
              >
                수정
              </Form.Label>
              <Form.Label
                style={{
                  margin: "0px",
                  fontSize: "10px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
                onClick={commentDelete}
              >
                삭제
              </Form.Label>
            </Form.Group>
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
            style={{ resize: "none", height: "100px", marginBottom: "10px" }}
            value={CommentValue}
            onChange={CommentChange}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={onSubmit}>
              등록
            </Button>
          </InputGroup.Append>
        </InputGroup>
      )}
    </Form>
  );
}

export default SingleComment;
