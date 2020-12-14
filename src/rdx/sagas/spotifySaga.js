import { put, select } from "redux-saga/effects";
import * as actions from "../actions";
import * as c from "../actions/types";
import {
  spotifyAccessTokenService,
  getApiContentsService,
  spotifyRefreshAccessTokenService,
} from "../services/spotifyService";
import { call } from "redux-saga/effects";

export const getAccessToken = (state) => state.spotifyApi;

export function* getAccessTokenSaga(action) {
  try {
    let resp = yield call(spotifyAccessTokenService, action.spotifyAuthToken);
    console.log("1. RESP", resp);
    if (resp.access_token) {
      yield put({
        type: c.GET_API_TOKENS_WATCHER,
        access_token: resp.access_token,
        refresh_token: resp.refresh_token,
      });
    } else {
      const contentsWithTokens = yield select(getAccessToken);
      let nextResp = yield call(
        spotifyRefreshAccessTokenService,
        contentsWithTokens
      );
      if (nextResp.access_token) {
        const contentsWithTokens = yield select(getAccessToken);
        yield put({
          type: c.GET_API_TOKENS_WATCHER,
          access_token: nextResp.access_token,
          refresh_token: contentsWithTokens.refresh_token,
        });
        console.log("4. refreshTokenresp", nextResp);
      }
    }
  } catch (err) {
    yield put({ type: "hello", error: err.message });
  }
}

export function* getApiContentsSaga(action) {
  const contentsWithTokens = yield select(getAccessToken);
  console.log("3.ACCESS TOKEN", contentsWithTokens);
  try {
    let resp = yield call(getApiContentsService, contentsWithTokens);
    if (resp.items) {
      yield put(actions.storeContents(resp.items));
    } else {
      throw yield resp.json();
    }
  } catch (err) {
    yield put({ type: "hello", error: err.message });
  }
}
