import { takeLatest } from "redux-saga/effects";
import { signUpSaga, confirmUserSaga, logInSaga } from "./authSaga";
import { getAccessTokenSaga } from "./SpotifyTokenSaga";
import * as c from "../actions/types";

export function* watchUserAuthentication() {
  yield takeLatest(c.GET_ACCESS_TOKEN_WATCHER, getAccessTokenSaga)
  // yield takeLatest(c.SIGNUP_WATCHER, signUpSaga);
  // yield takeLatest(c.CONFIRM_USER_WATCHER, confirmUserSaga);
  // yield takeLatest(c.LOGIN_WATCHER, logInSaga);
}
