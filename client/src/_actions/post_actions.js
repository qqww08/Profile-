import Axios from "axios";
import { POST_UP, POST_GET, POST_OPEN } from "./types";

export function postup(dataToSubmit) {
  const request = Axios.post("/api/posts/wr", dataToSubmit).then(
    response => response.data
  );

  return {
    type: POST_UP,
    payload: request
  };
}
export function postget() {
  const request = Axios.get("/api/posts/getWr").then(response => response.data);

  return {
    type: POST_GET,
    payload: request
  };
}
export function postgetOpen(data) {
  const request = Axios.post("/api/posts/wrDetail", data).then(
    response => response.data
  );
  return {
    type: POST_OPEN,
    payload: request
  };
}
