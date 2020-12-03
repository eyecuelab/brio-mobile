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
            category: "exercise",
            id: "exerciseB1",
            description: "Do you have running shoes?",
            createdAt: new Date(),
            completedAt: null,
            points: 10,
            color: "#D8A1D5",
            prerequisiteId: null,
            suggestions: [
              {
                id: "exerciseS1",
                description: "Go for a 1 mile jog",
                createdAt: new Date(),
                completedAt: null,
                points: 20,
                color: "#D8A1D5",
                prerequisiteId: "exerciseB1",
              },
              {
                id: "exerciseS2",
                description: "Go for a 3 mile run",
                createdAt: new Date(),
                completedAt: null,
                points: 30,
                color: "#D8A1D5",
                prerequisiteId: "exerciseS1",
              },
            ]
          },
          {
            category: "exercise",
            id: "exerciseB2",
            description: "Do you have a bike?",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
            color: "#D8A1D5",
            suggestions: [
              {
                id: "exerciseS3",
                description: "Go for a 1 mile jog",
                createdAt: new Date(),
                completedAt: null,
                points: 20,
                color: "#D8A1D5",
              },
              {
                id: "exerciseS4",
                description: "Go for a 3 mile run",
                createdAt: new Date(),
                completedAt: null,
                points: 30,
                color: "#D8A1D5",
              },
            ]
          },
          {
            category: "exercise",
            id: "exerciseB3",
            description: "Do you have a yoga mat?",
            createdAt: new Date(),
            completedAt: null,
            points: 30,
            color: "#D8A1D5",
          },
          {
            category: "music",
            id: "musicB1",
            description: "Do you know how to make a playlist?",
            createdAt: new Date(),
            completedAt: null,
            points: 10,
            color: "#94D7B5"
          },
          {
            category: "music",
            id: "musicB2",
            description: "Are you folowing multiple artists?",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
            color: "#94D7B5"
          },
          {
            category: "music",
            id: "musicB3",
            description: "Do you follow other users?",
            createdAt: new Date(),
            completedAt: null,
            points: 30,
            color: "#94D7B5"
          },
          {
            category: "social",
            id: "convB1",
            description: "Do you...?",
            createdAt: new Date(),
            completedAt: null,
            points: 10,
            color: "#E0C45E",
          },
          {
            category: "social",
            id: "convB2",
            description: "Are you...?",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
            color: "#E0C45E",
          },
          {
            category: "social",
            id: "convB3",
            description: "Do you have...?",
            createdAt: new Date(),
            completedAt: null,
            points: 30,
            color: "#E0C45E",
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

// const exercise_chain_1 = {
//   id: 'exercise_chain_1',
//   prerequisite_chain_id: null,
//   steps: [
//   {
//     category: "exercise",
//     id: "exerciseB1",
//     description: "Do you have running shoes?",
//     createdAt: new Date(),
//     completedAt: null,
//     points: 10,
//     color: "#D8A1D5",
//     prerequisite_step_id: null, 
//   }, {
//     category: "exercise",
//     id: "exerciseB2",
//     description: "Run 1 mile?",
//     createdAt: new Date(),
//     completedAt: null,
//     points: 10,
//     color: "#D8A1D5",
//     prerequisite_step_id: "exerciseB1", 
//   }, {
//     category: "exercise",
//     id: "exerciseB1",
//     description: "Run 3 miles?",
//     createdAt: new Date(),
//     completedAt: null,
//     points: 10,
//     color: "#D8A1D5",
//     prerequisite_step_id: "exerciseB2", 
//   }
// ]
// }

// const exercise_chain_2 = {
//   id: 'exercise_chain_2',
//   prerequisite_chain_id: 'exercise_chain_1',
//   steps: [
//   {
//     category: "exercise",
//     id: "exerciseB1",
//     description: "Do you have running shoes?",
//     createdAt: new Date(),
//     completedAt: null,
//     points: 10,
//     color: "#D8A1D5",
//     prerequisite_step_id: null, 
//   }, {
//     category: "exercise",
//     id: "exerciseB2",
//     description: "Run 1 mile?",
//     createdAt: new Date(),
//     completedAt: null,
//     points: 10,
//     color: "#D8A1D5",
//     prerequisite_step_id: "exerciseB1", 
//   }, {
//     category: "exercise",
//     id: "exerciseB3",
//     description: "Run 3 miles?",
//     createdAt: new Date(),
//     completedAt: null,
//     points: 10,
//     color: "#D8A1D5",
//     prerequisite_step_id: "exerciseB3", 
//   }
// ]
// }