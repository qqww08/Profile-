import {
  LOGIN_USER,
  REGISTER,
  AUTH_USER,
  FACE_USER,
  FACE_REG,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };

    case REGISTER:
      return { ...state, register: action.payload };
    case FACE_USER:
      return { ...state, loginSuccess: action.payload };

    case FACE_REG:
      return { ...state, register: action.payload };

    case AUTH_USER:
      return { ...state, userData: action.payload };

    default:
      return state;
  }
}
