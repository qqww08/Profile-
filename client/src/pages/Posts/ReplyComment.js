import React from "react";
import SingleComment from "./SingleComment";

function ReplyComment(props) {
  let renderReplyComment = (parentCommentId) =>
    props.CommentLists.map((comment, index) => (
      <React.Fragment>
        {comment.responseTo === parentCommentId && (
          <div>
            <div style={{ width: "80%", marginLeft: "40px" }}>
              <SingleComment
                comment={comment}
                postId={props.postId}
                refreshFunction={props.refreshFunction}
              />
            </div>
            <div>
              <ReplyComment
                CommentLists={props.CommentLists}
                parentCommentId={comment._id}
                postId={props.postId}
                refreshFunction={props.refreshFunction}
              />
            </div>
          </div>
        )}
      </React.Fragment>
    ));
  return <div> {renderReplyComment(props.parentCommentId)}</div>;
}

export default ReplyComment;
