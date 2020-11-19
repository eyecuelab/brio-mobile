import * as c from "../actions/types";

const initialAuthState = {};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case c.ADDED_BLOCKERS:
      return {
        ...state,
        blockers: [
          {
            category: "music",
            id: "musicB1",
            description: "Do you know how to make a playlist?",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            category: "music",
            id: "musicB2",
            description: "Are you folowing multiple artists?",
            createdAt: new Date(),
            completedAt: null,
            points: 10,
          },
          {
            category: "music",
            id: "musicB3",
            description: "Do you follow other users?",
            createdAt: new Date(),
            completedAt: null,
            points: 30,
          },
        ],
      };
    default:
      return state;
  }
};
