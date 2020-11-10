import { takeLatest } from "redux-saga/effects";
import { signUpSaga } from "./signUpSaga";
import * as c from "../actions/types";

export function* watchUserAuthentication() {
  yield takeLatest(c.SIGNUP_WATCHER, signUpSaga);
}
