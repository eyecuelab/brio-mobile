import { put, select } from "redux-saga/effects";
import * as actions from "../actions";
import * as c from "../actions/types";
import {
  spotifyAccessTokenService,
  getApiContentsService,
} from "../services/spotifyService";
import { call } from "redux-saga/effects";

export function* getAccessTokenSaga(action) {
  try {
    let resp = yield call(spotifyAccessTokenService, action.spotifyAuthToken);
    console.log("1. RESP", resp);
    if (resp.access_token) {
      yield put({
        type: c.GET_API_CONTENTS_WATCHER,
        access_token: resp.access_token,
      });
      console.log("4.hello");
    } else {
      throw yield resp.json();
    }
  } catch (err) {
    yield put({ type: "hello", error: err.message });
  }
}

export const getAccessToken = (state) => state.spotifyApi;

export function* getApiContentsSaga(action) {
  const token = yield select(getAccessToken);
  console.log("3.ACCESS TOKEN", token);
  try {
    let resp = yield call(getApiContentsService, token);
    if (resp.items) {
      yield put(actions.storeContents(resp.items));
    } else {
      throw yield resp.json();
    }
  } catch (err) {
    yield put({ type: "hello", error: err.message });
  }
}
