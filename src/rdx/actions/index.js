import * as c from "./types";

export const loggedIn = (code) => {
  return {
    type: c.LOGGED_IN,
    code
  };
};
export const addedBlockers = () => {
  return {
    type: c.ADDED_BLOCKERS
  };
};
export const completedBlocker = (id) => {
  return {
    type: c.COMPLETED_BLOCKER,
    id
  };
};
export const loadedBlockers = (id) => {
  return {
    type: c.LOADED_BLOCKERS,
  };
};