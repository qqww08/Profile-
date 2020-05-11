import Axios from "axios";
import { COMMENT, COMMENT_GET } from "./types";
//댓글 정보 전송
export function saveComment(dataToSubmit) {
  const request = Axios.post("/api/comment/saveComment", dataToSubmit).then(
    (response) => response.data
  );

  return {
    type: COMMENT,
    payload: request,
  };
}
export function getComment(dataToSubmit) {
  const request = Axios.post("/api/comment/getComment", dataToSubmit).then(
    (response) => response.data
  );

  return {
    type: COMMENT_GET,
    payload: request,
  };
}
