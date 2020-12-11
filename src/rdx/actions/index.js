import * as c from "./types";


export const loggedIn = (code) => {
  return {
    type: c.LOGGED_IN,
    code
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
export const getAccessToken = (spotifyAuthToken) => {
  return {
    type: c.GET_ACCESS_TOKEN,
    spotifyAuthToken,
  };
};