import React from "react";
import { withRouter } from "react-router-dom";

function WrBtn({ onPublish, onCancel }) {
  return (
    <div>
      <br />
      <button onClick={onPublish}>421412</button>
      <button onClick={onCancel}>41421</button>
    </div>
  );
}
export default withRouter(WrBtn);
