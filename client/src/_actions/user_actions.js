import Axios from "axios";
import {
  LOGIN_USER,
  REGISTER,
  AUTH_USER,
  FACEBOOK,
  FACEBOOK_REG
} from "./types";

export function loginUser(dataToSubmit) {
  const request = Axios.post("/api/users/login", dataToSubmit).then(
    response => response.data
  );

  return {
    type: LOGIN_USER,
    payload: request
  };
}
export function register(dataToSubmit) {
  const request = Axios.post("/api/users/register", dataToSubmit).then(
    response => response.data
  );

  return {
    type: REGISTER,
    payload: request
  };
}
export function auth() {
  const request = Axios.get("/api/users/auth").then(response => response.data);

  return {
    type: AUTH_USER,
    payload: request
  };
}

export function facebook(data) {
  const request = Axios.post("/api/faces/login", data).then(
    response => response.data
  );

  return {
    type: FACEBOOK,
    payload: request
  };
}
export function facebook_reg(data) {
  const request = Axios.post("/api/faces/register", data).then(
    response => response.data
  );

  return {
    type: FACEBOOK_REG,
    payload: request
  };
}
