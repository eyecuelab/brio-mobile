import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blockerReducer from "./blockerReducer";

const rootReducer = combineReducers({
  user: authReducer,
  catState: blockerReducer,
});

export default rootReducer;