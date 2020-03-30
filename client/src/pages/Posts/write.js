import React from "react";
import { withRouter } from "react-router-dom";
import WrBtn from "./writeButton";
function write() {
  return (
    <div>
      <input placeholder="제목을 입력하세요" />
      <br />
      <textarea />
      <br />
      <WrBtn />
    </div>
  );
}
export default withRouter(write);
