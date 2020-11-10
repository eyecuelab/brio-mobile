import * as c from "../actions/types";
import { signUpUserService, confirmUserService } from "../services/authService";
import { call, put } from "redux-saga/effects";

export function* signUpSaga(action) {
  let resp = yield call(signUpUserService, action.payload);
  console.log(resp.status);
  if (resp.ok && resp.status === 204) {
    yield put({ type: c.SIGNUP_SUCCESS });
  } else {
    throw yield resp.json();
  }
}
export function* confirmUserSaga(action) {
  let resp = yield call(confirmUserService, action.payload);
  console.log(resp.status);
  if (resp.ok && resp.status === 204) {
    yield put({ type: c.CONFIRM_SUCCESS });
  } else {
    throw yield resp.json();
  }
}