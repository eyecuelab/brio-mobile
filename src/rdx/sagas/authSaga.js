import * as c from "../actions/types";
import { signUpUserService } from "../services/authService";
import { call, put } from "redux-saga/effects";

export function* authSaga(action) {
  let resp = yield call(signUpUserService, action.payload);
  console.log(resp.status);
  if (resp.ok && resp.status === 204) {
    yield put({ type: c.SIGNUP_SUCCESS });
    
  } else {
    throw yield resp.json();
  }
}

// try{
// catch (error) {
//   yield put({ type: c.SIGNUP_ERROR, error: error.message });
// } finally {
//   if (yield cancelled()) {
//     yield put({ type: c.SIGNUP_CANCELLED });
//   }
// }
