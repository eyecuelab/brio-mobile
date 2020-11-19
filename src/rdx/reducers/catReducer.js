import * as c from "../actions/types";

const initialAuthState = {
    category: null,
  };

  export default (state = initialAuthState, action) => {
    switch (action.type) {
      case c.ADDED_MUSIC:
        return {
          ...state,
          category: "music",
        };
      default:
        return state;
    }
  };