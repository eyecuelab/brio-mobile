import * as c from "./types";


export const loggedIn = (code, username) => {
  return {
    type: c.LOGGED_IN,
    code,
    username
  };
};
export const completedBlocker = (id) => {
  return {
    type: c.COMPLETED_BLOCKER,
    id
  };
};
export const completedSuggestion = (blockerId, suggestionId) => {
  return {
    type: c.COMPLETED_SUGGESTION,
    blockerId,
    suggestionId,
  };
};
export const resetProgress = () => {
  return {
    type: c.RESET_PROGRESS,
  };
};
export const logoutButton = () => {
  return {
    type: c.LOGGED_OUT,
  };
};
export const getAccessTokenWatcher = (spotifyAuthToken) => {
  return {
    type: c.GET_ACCESS_TOKEN_WATCHER,
    spotifyAuthToken,
  };
};
export const getApiTokensWatcher = (contentsWithTokens) => {
  return {
    type: c.GET_API_TOKENS_WATCHER,
    refresh_token: contentsWithTokens.refresh_token,
  };
};
export const storeContents = (contents) => {
  return {
    type: c.STORE_CONTENTS,
    contents,
  };
};
export const changedUsername = (username) => {
  return {
    type: c.CHANGED_USERNAME,
    username,
  };
};
export const calledApi = (apiEndpoint) => {
  return {
    type: c.CALLED_API,
    apiEndpoint,
  };
};