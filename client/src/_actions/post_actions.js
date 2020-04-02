import Axios from "axios";
import { BORDER_SAVE, BORDER_GET } from "./types";

export function bordersave(dataToSubmit) {
  const request = Axios.post("/api/posts/", dataToSubmit).then(
    response => response.data
  );
  return {
    type: BORDER_SAVE,
    payload: request
  };
}
export function borderget() {
  const request = Axios.get("/api/posts/").then(response => response.data);
  return {
    type: BORDER_GET,
    payload: request
  };
}
