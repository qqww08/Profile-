import { combineReducers } from "redux";
import user from "./user_reducers";
import post from "./post_reducers";
import comment from "./comment_actions";
const rootReducer = combineReducers({
  user,
  post,
  comment,
});

export default rootReducer;
