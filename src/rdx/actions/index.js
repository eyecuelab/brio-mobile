import * as c from "./types";

export const signUpWatcher = (payload) => {
  return {
    type: c.SIGNUP_WATCHER,
    payload,
  };
};
export const confirmUserWatcher = (payload) => {
  return {
    type: c.CONFIRM_USER_WATCHER,
    payload,
  };
};
