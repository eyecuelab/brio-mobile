import { put } from "redux-saga/effects";
import * as actions from "../actions";
import * as c from "../actions/types";
import { spotifyAccessTokenService } from "../services/spotifyService";
import { call } from "redux-saga/effects";

export function* getAccessTokenSaga(action) {
  try {
    let resp = yield call(spotifyAccessTokenService, action.spotifyAuthToken);
    console.log("RESP", resp);
    if (resp.access_token) {
      yield put(actions.getApiContents(resp.access_token));
    } else {
      throw yield resp.json();
    }
  } catch (err) {
    yield put({ type: "hello", error: err.message });
  }
}
