import { BORDER_SAVE, BORDER_GET, BORDER_INFO } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case BORDER_SAVE:
      return { ...state, success: action.payload };

    case BORDER_GET:
      return { ...state, success: action.payload };

    case BORDER_INFO:
      return { ...state, success: action.payload };

    default:
      return state;
  }
}
