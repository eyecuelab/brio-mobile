import { takeLatest } from "redux-saga/effects";
import { authSaga } from "./authSaga";
import * as c from "../actions/types";

export function* watchUserAuthentication() {
  yield takeLatest(c.SIGNUP_WATCHER, authSaga);
}
