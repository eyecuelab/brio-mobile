import { makeRedirectUri } from "expo-auth-session";
import Base64 from "Base64";
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "@env";

const SPOTIFY_ENDPOINT = "https://accounts.spotify.com";
const SPOTIFY_TOKEN_ENDPOINT = `${SPOTIFY_ENDPOINT}/api/token`;
const encoded = Base64.btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);

export const spotifyAccessTokenService = (spotifyAuthToken) => {
  const details = {
    grant_type: "authorization_code",
    code: spotifyAuthToken,
    redirect_uri: makeRedirectUri({
      native: "brio-mobile://redirect",
    }),
  };

  let formBody = [];
  for (let property in details) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  const parameters = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${encoded}`,
    },
    body: formBody,
  };

  return fetch(SPOTIFY_TOKEN_ENDPOINT, parameters)
    .then((resp) => resp.json())
    .then((resp) => resp);
};

export const getApiContentsService = (contentsWithTokens) => {
  const SPOTIFY_RECENT_PLAYED_ENDPOINT =
    "https://api.spotify.com/v1/me/player/recently-played";

  const parameters = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${contentsWithTokens.access_token}`,
    },
  };

  return fetch(SPOTIFY_RECENT_PLAYED_ENDPOINT, parameters)
    .then((resp) => resp.json())
    .then((resp) => resp);
};

export const spotifyRefreshAccessTokenService = (contentsWithTokens) => {
  const details = {
    grant_type: "refresh_token",
    refresh_token: contentsWithTokens.refresh_token,
    redirect_uri: makeRedirectUri({
      native: "brio-mobile://redirect",
    }),
  };

  let formBody = [];
  for (let property in details) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  const parameters = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${encoded}`,
    },
    body: formBody,
  };

  return fetch(SPOTIFY_TOKEN_ENDPOINT, parameters)
    .then((resp) => resp.json())
    .then((resp) => resp);
};
