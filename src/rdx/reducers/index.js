import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blockerReducer from "./blockerReducer";
import spotifyApiReducer from "./spotifyApiReducer";

const rootReducer = combineReducers({
  user: authReducer,
  blockersState: blockerReducer,
  spotifyToken: spotifyApiReducer,
});

export default rootReducer;