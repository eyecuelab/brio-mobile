import * as c from "./types";

export const signUpWatcher = (payload) => {
  return {
    type: c.SIGNUP_WATCHER,
    payload,
  };
};
