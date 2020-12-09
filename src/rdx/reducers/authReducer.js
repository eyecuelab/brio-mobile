import * as c from "../actions/types";

const initialAuthState = {
  code: null,
};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case c.LOGGED_IN:
      return {
        ...state,
        code: action.code,
      };
    default:
      return state;
  }
};