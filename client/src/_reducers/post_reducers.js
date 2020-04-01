import { POST_UP, POST_GET, POST_OPEN } from "../_actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case POST_UP:
      return { ...state, success: action.payload };

    case POST_GET:
      return { ...state, success: action.payload };

    case POST_OPEN:
      return { ...state, success: action.payload };

    default:
      return state;
  }
}
