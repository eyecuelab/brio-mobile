import { combineReducers } from "redux";
import authReducer from "./authReducer";
import catReducer from "./catReducer";

const rootReducer = combineReducers({
  user: authReducer,
  catState: catReducer,
});

export default rootReducer;