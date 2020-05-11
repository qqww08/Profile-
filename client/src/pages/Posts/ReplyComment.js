import React from "react";
import SingleComment from "./SingleComment";

function ReplyComment(props) {
  let renderReplyComment = (parentCommentId) =>
    props.CommentLists.map((comment, index) => (
      <React.Fragment key={index}>
        {comment.responseTo === parentCommentId && (
          <div>
            <div style={{ marginLeft: "20px", display: "flex" }}>
              <div>
                <p style={{ fontSize: "20px", marginRight: "10px" }}>ㄴ</p>
              </div>
              <div style={{ width: "100%" }}>
                <SingleComment
                  Info={props.Info}
                  comment={comment}
                  postId={props.postId}
                  refreshFunction={props.refreshFunction}
                />
              </div>
            </div>

            <div>
              <ReplyComment
                Info={props.Info}
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
