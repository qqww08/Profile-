import Axios from "axios";
import {
  BORDER_SAVE,
  BORDER_GET,
  BORDER_POST,
  BORDER_INFO,
  BORDER_EDIT,
  BORDER_DELETE,
  MBORDER_GET,
} from "./types";
import { BACK_SERVER_URL } from "../Config";
//게시판 글쓰기 정보 전송
export function bordersave(dataToSubmit) {
  const request = Axios.post(
    `${BACK_SERVER_URL}/api/posts/save`,
    dataToSubmit
  ).then((response) => response.data);
  return {
    type: BORDER_SAVE,
    payload: request,
  };
}
//게시판 목록 가지고 오기
export function borderget() {
  const request = Axios.get(`${BACK_SERVER_URL}/api/posts/`).then(
    (response) => response.data
  );
  return {
    type: BORDER_GET,
    payload: request,
  };
}
//모바일 게시판 목록
export function mborderget(data) {
  const request = Axios.post(`${BACK_SERVER_URL}/api/posts/mborder`, data).then(
    (response) => response.data
  );
  return {
    type: MBORDER_GET,
    payload: request,
  };
}
//게시판 검색
export function bordersearch(data) {
  const request = Axios.post(`${BACK_SERVER_URL}/api/posts/search`, data).then(
    (response) => response.data
  );
  return {
    type: BORDER_POST,
    payload: request,
  };
}
//게시글 정보
export function borderinfo(data) {
  const request = Axios.post(`${BACK_SERVER_URL}/api/posts/info`, data).then(
    (response) => response.data
  );
  return {
    type: BORDER_INFO,
    payload: request,
  };
}
//게시글 수정
export function borderedit(dataToSubmit) {
  const request = Axios.put(
    `${BACK_SERVER_URL}/api/posts/edit`,
    dataToSubmit
  ).then((response) => response.data);
  return {
    type: BORDER_EDIT,
    payload: request,
  };
}
export function bdelete(data) {
  const request = Axios.post(`${BACK_SERVER_URL}/api/posts/delete`, data).then(
    (response) => response.data
  );
  return {
    type: BORDER_DELETE,
    payload: request,
  };
}
