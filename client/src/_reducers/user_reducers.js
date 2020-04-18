import {
  LOGIN_USER,
  REGISTER,
  AUTH_USER,
  // FACE_USER,
  // FACE_REG,
  LOGOUT,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    //로그인 정보
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    //회원가입 정보
    case REGISTER:
      return { ...state, register: action.payload };
    // case FACE_USER:
    //   return { ...state, loginSuccess: action.payload };

    // case FACE_REG:
    //   return { ...state, register: action.payload };
    //로그인 체크
    case AUTH_USER:
      return { ...state, userData: action.payload };
    // 로그아웃 체크
    case LOGOUT:
      return { ...state, success: action.payload };
    default:
      return state;
  }
}
