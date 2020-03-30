import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../Main/Header";
function write() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <input placeholder="제목을 입력하세요" />
      <br />
      <textarea />
      <br />
      <button>421412</button>
      <button>41421</button>
    </div>
  );
}
export default withRouter(write);
