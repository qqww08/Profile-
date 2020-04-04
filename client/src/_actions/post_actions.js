import Axios from "axios";
import { BORDER_SAVE, BORDER_GET, BORDER_INFO } from "./types";

export function bordersave(dataToSubmit) {
  const request = Axios.post("/api/posts/", dataToSubmit).then(
    (response) => response.data
  );
  return {
    type: BORDER_SAVE,
    payload: request,
  };
}
export function borderget() {
  const request = Axios.get("/api/posts/").then((response) => response.data);
  return {
    type: BORDER_GET,
    payload: request,
  };
}
export function borderinfo(data) {
  const request = Axios.post("/api/posts/info", data).then(
    (response) => response.data
  );
  return {
    type: BORDER_INFO,
    payload: request,
  };
}
