import {
  COMMENT,
  COMMENT_GET,
  COMMENT_DELETE,
  COMMENT_PUT,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    //게시글 저장
    case COMMENT:
      return { ...state, success: action.payload };
    case COMMENT_GET:
      return { ...state, success: action.payload };
    case COMMENT_DELETE:
      return { ...state, success: action.payload };
    case COMMENT_PUT:
      return { ...state, success: action.payload };

    default:
      return state;
  }
}
