import Axios from "axios";
import {
  LOGIN_USER,
  REGISTER,
  AUTH_USER,
  G_REGISTER,
  LOGOUT,
  IMG_UPLOAD,
} from "./types";
//로그인 정보 전송
export function loginUser(dataToSubmit) {
  const request = Axios.post("/api/users/login", dataToSubmit).then(
    (response) => response.data
  );

  return {
    type: LOGIN_USER,
    payload: request,
  };
}
//이미지 업로드
export function imageupload(data) {
  const request = Axios.post("/api/users/image", data).then(
    (response) => response.data
  );

  return {
    type: IMG_UPLOAD,
    payload: request,
  };
}
//로그아웃 정보 전송
export function logout() {
  const request = Axios.get("/api/users/logout").then(
    (response) => response.data
  );
  return {
    type: LOGOUT,
    payload: request,
  };
}
//회원가입 정보 전송
export function register(dataToSubmit) {
  const request = Axios.post("/api/users/register", dataToSubmit).then(
    (response) => response.data
  );

  return {
    type: REGISTER,
    payload: request,
  };
}
export function gregister(dataToSubmit) {
  const request = Axios.post("/api/users/gregister", dataToSubmit).then(
    (response) => response.data
  );

  return {
    type: G_REGISTER,
    payload: request,
  };
}
// 로그인 체크
export function auth() {
  const request = Axios.get("/api/users/auth").then(
    (response) => response.data
  );

  return {
    type: AUTH_USER,
    payload: request,
  };
}
