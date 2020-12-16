import * as c from "../actions/types";

const initialState = {
  access_token: null,
  contents: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case c.GET_API_TOKENS_WATCHER:
      console.log("2. REFRESHTOKEN REDUCER");
      return {
        ...state,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
      };
    case c.STORE_CONTENTS:
      return {
        ...state,
        contents: action.contents,
      };
    case c.CALLED_API:
      return {
        ...state,
        apiEndpoint: action.apiEndpoint,
        createdAt: action.createdAt,
      };
    default:
      return state;
  }
};
