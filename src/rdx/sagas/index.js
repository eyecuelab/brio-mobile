import { watchUserAuthentication } from "./watcher";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchUserAuthentication()]);
}
