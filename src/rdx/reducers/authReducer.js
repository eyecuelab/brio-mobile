import * as c from "../actions/types";

const initialAuthState = {
  data: null,
  errorMessage: null,
  signupMessage: null,
  confirmationMessage: null,
  status: "Logged out",
  redirect: false,
  code: null,
  category: null
};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case c.LOGGED_IN:
      return {
        ...state,
        data: null,
        errorMessage: null,
        confirmationMessage: null,
        status: "Signed in",
        code: action.code,
      };
    default:
      return state;
  }
};