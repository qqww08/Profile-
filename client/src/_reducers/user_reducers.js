import {
  LOGIN_USER,
  REGISTER,
  AUTH_USER,
  FACEBOOK,
  FACEBOOK_REG
} from "../_actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };

    case REGISTER:
      return { ...state, register: action.payload };

    case AUTH_USER:
      return { ...state, userData: action.payload };

    case FACEBOOK:
      return { ...state, success: action.payload };

    case FACEBOOK_REG:
      return { ...state, success: action.payload };

    default:
      return state;
  }
}
