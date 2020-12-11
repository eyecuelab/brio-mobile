import * as c from "../actions/types";

const initialAuthState = {
  code: null,
};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case c.GET_API_CONTENTS:
      return {
        ...state,
        code: action.code,
      };
    default:
      return state;
  }
};