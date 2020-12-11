;import * as c from "../actions/types";

const initialAuthState = {
  access_token: null,
};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case c.GET_API_CONTENTS_WATCHER:
      console.log("2. ACCESS TOKEN REDUCER");
      return {
        ...state,
        access_token: action.access_token,
      };
    default:
      return state;
  }
};
