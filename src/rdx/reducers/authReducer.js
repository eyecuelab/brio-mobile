import * as c from "../actions/types";

const initialAuthState = {
  data: null,
  errorMessage: null,
  signupMessage: null,
  confirmationMessage: null,
  status: "Logged out",
  redirect: false,
};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case c.SIGNUP_SUCCESS:
      return {
        ...state,
        data: null,
        errorMessage: null,
        signupMessage: "Signed up successfully!",
        confirmationMessage: null,
        status: "Signed up",
      };
    default:
      return state;
  }
};
