import React from "react";
import { withRouter } from "react-router-dom";

function writePage() {
  return (
    <div>
      <input placeholder="제목을 입력하세요" />
      <br />
      <textarea />
    </div>
  );
}
export default withRouter(writePage);
