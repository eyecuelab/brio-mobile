import { put } from "redux-saga/effects";
import * as c from "../actions/types";
import { spotifyService } from "../services/spotifyService";
import { call } from "redux-saga/effects";

export function* getAccessTokenSaga(action) {
  try {
    let resp = yield call(spotifyService, action.spotifyAuthToken);
    console.log("RESP", resp);
    //call different type of action here
    if (resp.access_token) {
      yield put({ type: c.GET_ACCESS_TOKEN_WATCHER });
    } else {
      throw yield resp.json();
    }
  } 
  catch (err) {
    yield put({ type: "hello", error: err.message });
  }
}