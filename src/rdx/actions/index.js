import * as c from "./types";

export const loggedIn = (code) => {
  return {
    type: c.LOGGED_IN,
    code,
  };
};