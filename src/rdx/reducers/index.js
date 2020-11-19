import { combineReducers } from "redux";
import authReducer from "./authReducer";
import catReducer from "./catReducer";

const rootReducer = combineReducers({
  user: authReducer,
  blockers: catReducer,
});

export default rootReducer;
