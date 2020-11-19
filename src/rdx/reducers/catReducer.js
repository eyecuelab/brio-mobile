import * as c from "../actions/types";

const initialAuthState = {
  type: "blocker",
  category: null,
  description: null,
  createdAt: null,
  completedAt: null,
  points: null,
};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case c.ADDED_MUSIC:
      return {
        ...state,
        category: "music",
        description: "Do you know how to make a playlist?",
        createdAt: new Date(),
        completedAt: null,
        points: 10,
      }
    default:
      return state;
  }
};