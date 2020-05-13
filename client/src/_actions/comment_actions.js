import Axios from "axios";
import { COMMENT, COMMENT_GET, COMMENT_DELETE, COMMENT_PUT } from "./types";
import { BACK_SERVER_URL } from "../Config";
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
export function deleteComment(data) {
  const request = Axios.post("/api/comment/delete", data).then(
    (response) => response.data
  );

  return {
    type: COMMENT_DELETE,
    payload: request,
  };
}
export function putComment(data) {
  const request = Axios.put("/api/comment/edit", data).then(
    (response) => response.data
  );

  return {
    type: COMMENT_PUT,
    payload: request,
  };
}
