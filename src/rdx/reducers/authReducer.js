import * as c from "../actions/types";

const initialAuthState = {
  code: null,
  username: null,
  eyeColor: null
};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case c.LOGGED_IN: {
      return {
        ...state,
        code: action.code,
        username: action.username,
        eyeColor: action.eyeColor
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
    case c.SAVED_EYECOLOR: {
      return {
        ...state,
        eyeColor: action.eyeColor,
      };
    }
    case c.DEACTIVATE_AUTH: {
      return initialAuthState
    }
    default:
      return state;
  }
};
