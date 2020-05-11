import { COMMENT } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    //게시글 저장
    case COMMENT:
      return { ...state, success: action.payload };

    default:
      return state;
  }
}
