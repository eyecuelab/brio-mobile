import * as c from "../actions/types";

const initialAuthState = {
  code: null,
};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case c.LOGGED_IN: {
      return {
        ...state,
        code: action.code,
        username: action.username,
      };
    }
    case c.LOGGED_OUT: {
      return {
        ...state,
        code: null,
      };
    }
    case c.CHANGED_USERNAME: {
      return {
        ...state,
        username: action.username,
      };
    }

    default:
      return state;
  }
};
