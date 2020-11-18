import { takeLatest } from "redux-saga/effects";
import { signUpSaga, confirmUserSaga, logInSaga } from "./authSaga";
import * as c from "../actions/types";

export function* watchUserAuthentication() {
  // yield takeLatest(c.SIGNUP_WATCHER, signUpSaga);
  // yield takeLatest(c.CONFIRM_USER_WATCHER, confirmUserSaga);
  // yield takeLatest(c.LOGIN_WATCHER, logInSaga);
}
