import {
  BORDER_SAVE,
  BORDER_GET,
  BORDER_INFO,
  BORDER_EDIT,
  BORDER_DELETE,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    //게시글 저장
    case BORDER_SAVE:
      return { ...state, success: action.payload };
    //게시판 목록
    case BORDER_GET:
      return { ...state, success: action.payload };
    //게시글 정보
    case BORDER_INFO:
      return { ...state, success: action.payload };
    //게시글 수정
    case BORDER_EDIT:
      return { ...state, success: action.payload };
    //게시글 삭제
    case BORDER_DELETE:
      return { ...state, success: action.payload };

    default:
      return state;
  }
}
