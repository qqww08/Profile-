import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { saveComment } from "../../_actions/comment_actions";
import "./css/Comment.css";
import SingleComment from "./SingleComment";
import ReplyComment from "./ReplyComment";
function Comment(props) {
  const user = useSelector((state) => state.user);
  const PostId = props.postId;

  const dispatch = useDispatch();
  const [CommentValue, setCommentValue] = useState("");
  const Commenthandler = (event) => {
    setCommentValue(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const body = {
      content: CommentValue,
      writer: user.userData._id,
      postId: PostId,
    };

    dispatch(saveComment(body)).then((response) => {
      if (response.payload.success) {
        setCommentValue("");

        props.refreshFunction(response.payload.result);
      } else {
        alert("저장하지 못했습니다.");
      }
    });
  };

  return (
    <div>
      <p>댓글</p>
      <hr style={{ background: "#ccc" }} />

      {props.CommentLists &&
        props.CommentLists.map(
          (comment, index) =>
            !comment.responseTo && (
              <React.Fragment key={index}>
                <SingleComment
                  Info={props.Info}
                  comment={comment}
                  postId={props.postId}
                  refreshFunction={props.refreshFunction}
                />
                <ReplyComment
                  Info={props.Info}
                  CommentLists={props.CommentLists}
                  postId={props.postId}
                  parentCommentId={comment._id}
                  refreshFunction={props.refreshFunction}
                />
              </React.Fragment>
            )
        )}
      {user.userData.isAuth ? (
        <InputGroup className="comment">
          <FormControl
            as="textarea"
            placeholder="내용을 입력하세요"
            aria-label="Recipient's username"
            aria-label="With textarea"
            value={CommentValue}
            onChange={Commenthandler}
            style={{ resize: "none", height: "80px" }}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={onSubmit}>
              등록
            </Button>
          </InputGroup.Append>
        </InputGroup>
      ) : (
        <div>댓글은 로그인 후 사용가능</div>
      )}
    </div>
  );
}

export default Comment;
