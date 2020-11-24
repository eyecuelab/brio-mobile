import * as c from "../actions/types";

const initialBlockerState = {
  blockers: [],
};

export default (state = initialBlockerState, action) => {
  switch (action.type) {
    case c.ADDED_BLOCKERS:
      return {
        ...state,
        blockers: [
          {
            category: "conversation",
            id: "convB1",
            description: "Do you...?",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            category: "conversation",
            id: "convB2",
            description: "Are you...?",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            category: "conversation",
            id: "convB3",
            description: "Do you have...?",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            category: "exercise",
            id: "exerciseB1",
            description: "Do you have sneakers or running shoes?",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            category: "exercise",
            id: "exerciseB2",
            description: "Do you have a helmet?",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            category: "exercise",
            id: "exerciseB3",
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

    case c.COMPLETED_BLOCKER:
      const currentState = { ...state };
      const { blockers } = currentState;
      let updatedBlocker = blockers.find((blocker) => blocker.id === action.id);
      updatedBlocker = { ...updatedBlocker, completedAt: new Date() };
      const newBlockers = blockers.filter(
        (blocker) => blocker.id !== action.id
      );
      return {
        ...currentState,
        blockers: [...newBlockers, updatedBlocker],
      };

    default:
      return state;
  }
};
