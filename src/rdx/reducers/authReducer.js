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
    case c.CONFIRM_USER_SUCCESS:
      return {
        ...state,
        data: null,
        errorMessage: null,
        signUpMessage: null,
        confirmationMessage: "User Confirmed",
      };
    case c.LOGIN_SUCCESS:
      return {
        ...state,
        data: null,
        errorMessage: null,
        signupMessage: null,
        status: "Logged in",
      };
    case c.LOGIN_ERROR:
      return {
        ...state,
        errorMessage: action.error,
        signupMessage: null,
        status: "Login error",
      };
    default:
      return state;
  }
};
