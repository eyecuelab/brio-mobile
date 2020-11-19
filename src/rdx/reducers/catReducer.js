import * as c from "../actions/types";

const initialAuthState = {};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case c.ADDED_BLOCKERS:
      return {
        ...state,
        blockers: [
          {
            category: "conversation",
            id: "conversationB1",
            description: "Do you...?",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            category: "conversation",
            id: "conversationB1",
            description: "Are you...?",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            category: "conversation",
            id: "conversationB1",
            description: "Do you have...?",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            category: "exercise",
            id: "exerciseB1",
            description: "Do you have sneakers or running shoes",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            category: "exercise",
            id: "exerciseB1",
            description: "Do you have a helmet?",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            category: "exercise",
            id: "exerciseB1",
            description: "Do you have a yoga mat?",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
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
