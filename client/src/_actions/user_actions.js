import Axios from "axios";
import { LOGIN_USER, REGISTER, AUTH_USER, FACE_USER, FACE_REG } from "./types";

export function loginUser(dataToSubmit) {
  const request = Axios.post("/api/users/login", dataToSubmit).then(
    (response) => response.data
  );

  return {
    type: LOGIN_USER,
    payload: request,
  };
}
export function register(dataToSubmit) {
  const request = Axios.post("/api/users/register", dataToSubmit).then(
    (response) => response.data
  );

  return {
    type: REGISTER,
    payload: request,
  };
}
export function fbUser(data) {
  const request = Axios.post("/api/users/fblogin", data).then(
    (response) => response.data
  );

  return {
    type: FACE_USER,
    payload: request,
  };
}
export function fbregister(data) {
  const request = Axios.post("/api/users/fbregister", data).then(
    (response) => response.data
  );

  return {
    type: FACE_REG,
    payload: request,
  };
}
export function auth() {
  const request = Axios.get("/api/users/auth").then(
    (response) => response.data
  );

  return {
    type: AUTH_USER,
    payload: request,
  };
}
