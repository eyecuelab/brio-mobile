import { combineReducers } from "redux";
import authReducer from "./authReducer";
import catReducer from "./catReducer"

const rootReducer = combineReducers({
  user: authReducer,
  category: catReducer,
});

export default rootReducer;
