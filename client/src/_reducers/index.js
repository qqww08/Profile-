import { combineReducers } from "redux";
import user from "./user_reducers";
import post from "./post_reducers";
const rootReducer = combineReducers({
  user,
  post
});

export default rootReducer;
