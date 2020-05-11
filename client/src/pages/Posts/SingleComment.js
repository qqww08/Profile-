import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveComment } from "../../_actions/comment_actions";
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

  const [ReComment, setReComment] = useState(false);
  const [CommentValue, setCommentValue] = useState("");
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
        setCommentValue("");
        setReComment(false);
      } else {
        alert("저장하지 못했습니다.");
      }
    });
  };

  return (
    <Form>
      <Form.Group style={{ display: "flex" }}>
        {img ? (
          <Image
            src={`http://localhost:5000/${img}`}
            className="profileImg"
            roundedCircle
          />
        ) : (
          <Image src={unimage} className="profileImg" />
        )}
        <Form.Group style={{ margin: "0px" }}>
          <Form.Group style={{ margin: "0px" }}>
            <Form.Label
              style={{ margin: "0px", fontWeight: "bold", marginRight: "10px" }}
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
      <hr style={{ border: "0.1px dashed gray", background: "#ccc" }} />
      {ReComment && (
        <InputGroup>
          <FormControl
            as="textarea"
            placeholder="내용을 입력하세요"
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
