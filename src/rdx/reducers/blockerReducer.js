import * as c from "../actions/types";

const initialBlockerState = {
  blockers: [],
  currentPoints: {
    exercise: 0,
    music: 0,
    social: 0,
  },
};

export default (state = initialBlockerState, action) => {
  switch (action.type) {
    case c.ADDED_BLOCKERS: {
      return {
        currentPoints: {
          exercise: 0,
          music: 0,
          social: 0,
        },
        blockers: [
          {
            category: "exercise",
            id: "exerciseB1",
            description: "Do you have running shoes?",
            createdAt: new Date(),
            completedAt: null,
            points: 10,
            color: "#D8A1D5",
            suggestions: [
              {
                id: "exerciseS1",
                description: "Go for a 1 mile jog",
                createdAt: new Date(),
                completedAt: null,
                points: 20,
                color: "#D8A1D5",
              },
              {
                id: "exerciseS2",
                description: "Go for a 3 mile run",
                createdAt: new Date(),
                completedAt: null,
                points: 30,
                color: "#D8A1D5",
              },
            ],
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
                description: "Go for a 1 mile bike",
                createdAt: new Date(),
                completedAt: null,
                points: 20,
                color: "#D8A1D5",
              },
              {
                id: "exerciseS4",
                description: "Go for a 3 mile bike",
                createdAt: new Date(),
                completedAt: null,
                points: 30,
                color: "#D8A1D5",
              },
            ],
          },
          {
            category: "exercise",
            id: "exerciseB3",
            description: "Do you have a yoga mat?",
            createdAt: new Date(),
            completedAt: null,
            points: 30,
            color: "#D8A1D5",
            suggestions: [
              {
                id: "exerciseS5",
                description: "Do 15 mins yoga",
                createdAt: new Date(),
                completedAt: null,
                points: 20,
                color: "#D8A1D5",
              },
              {
                id: "exerciseS6",
                description: "Do 30 mins yoga",
                createdAt: new Date(),
                completedAt: null,
                points: 30,
                color: "#D8A1D5",
              },
            ],
          },
          {
            category: "music",
            id: "musicB1",
            description: "Do you know how to make a playlist?",
            createdAt: new Date(),
            completedAt: null,
            points: 10,
            color: "#94D7B5",
            suggestions: [
              {
                id: "musicS1",
                description: "...",
                createdAt: new Date(),
                completedAt: null,
                points: 20,
                color: "#D8A1D5",
              },
              {
                id: "musicS2",
                description: "......",
                createdAt: new Date(),
                completedAt: null,
                points: 30,
                color: "#D8A1D5",
              },
            ],
          },
          {
            category: "music",
            id: "musicB2",
            description: "Are you folowing multiple artists?",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
            color: "#94D7B5",
            suggestions: [
              {
                id: "musicS3",
                description: "...",
                createdAt: new Date(),
                completedAt: null,
                points: 20,
                color: "#D8A1D5",
              },
              {
                id: "musicS4",
                description: "......",
                createdAt: new Date(),
                completedAt: null,
                points: 30,
                color: "#D8A1D5",
              },
            ],
          },
          {
            category: "music",
            id: "musicB3",
            description: "Do you follow other users?",
            createdAt: new Date(),
            completedAt: null,
            points: 30,
            color: "#94D7B5",
            suggestions: [
              {
                id: "musicS5",
                description: "...",
                createdAt: new Date(),
                completedAt: null,
                points: 20,
                color: "#D8A1D5",
              },
              {
                id: "musicS6",
                description: "......",
                createdAt: new Date(),
                completedAt: null,
                points: 30,
                color: "#D8A1D5",
              },
            ],
          },
          {
            category: "social",
            id: "socialB1",
            description: "Do you...?",
            createdAt: new Date(),
            completedAt: null,
            points: 10,
            color: "#E0C45E",
            suggestions: [
              {
                id: "socialS1",
                description: "...",
                createdAt: new Date(),
                completedAt: null,
                points: 20,
                color: "#D8A1D5",
              },
              {
                id: "socialS2",
                description: "......",
                createdAt: new Date(),
                completedAt: null,
                points: 30,
                color: "#D8A1D5",
              },
            ],
          },
          {
            category: "social",
            id: "socialB2",
            description: "Are you...?",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
            color: "#E0C45E",
            suggestions: [
              {
                id: "socialS3",
                description: "...",
                createdAt: new Date(),
                completedAt: null,
                points: 20,
                color: "#D8A1D5",
              },
              {
                id: "socialS4",
                description: "......",
                createdAt: new Date(),
                completedAt: null,
                points: 30,
                color: "#D8A1D5",
              },
            ],
          },
          {
            category: "social",
            id: "socialB3",
            description: "Do you have...?",
            createdAt: new Date(),
            completedAt: null,
            points: 30,
            color: "#E0C45E",
            suggestions: [
              {
                id: "socialS5",
                description: "...",
                createdAt: new Date(),
                completedAt: null,
                points: 20,
                color: "#D8A1D5",
              },
              {
                id: "socialS6",
                description: "......",
                createdAt: new Date(),
                completedAt: null,
                points: 30,
                color: "#D8A1D5",
              },
            ],
          },
        ],
      };
    }

    case c.COMPLETED_BLOCKER: {
      const currentState = { ...state };
      // updating blocker with completedAt
      const { blockers, currentPoints } = currentState;
      let updatedBlocker = blockers.find((blocker) => blocker.id === action.id);
      updatedBlocker = { ...updatedBlocker, completedAt: new Date() };
      const otherBlockers = blockers.filter(
        (blocker) => blocker.id !== action.id
      );
      const updatedBlockers = [...otherBlockers, updatedBlocker];
      // updating currentPoints with category
      const currentPointsForCateogry = currentPoints[updatedBlocker.category];
      const updatedPoints = {
        ...currentPoints,
        [updatedBlocker.category]:
          currentPointsForCateogry + updatedBlocker.points,
      };
      return {
        ...currentState,
        blockers: updatedBlockers,
        currentPoints: updatedPoints,
      };
    }

    case c.COMPLETED_SUGGESTION: {
      const currentState = { ...state };
      // updating suggestion with completedAt
      const { blockers, currentPoints } = currentState;
      let updatedBlocker = blockers.find(
        (blocker) => blocker.id === action.blockerId
      );
      const suggestions = updatedBlocker.suggestions;
      let updatedSuggestion = suggestions.find(
        (suggestion) => suggestion.id === action.suggestionId
      );
      updatedSuggestion = { ...updatedSuggestion, completedAt: new Date() };

      const otherSuggestions = suggestions.filter(
        (suggestion) => suggestion.id !== action.suggestionId
      );
      updatedBlocker = {
        ...updatedBlocker,
        suggestions: [...otherSuggestions, updatedSuggestion],
      };
      const otherBlockers = blockers.filter(
        (blocker) => blocker.id !== action.blockerId
      );
      const updatedBlockers = [...otherBlockers, updatedBlocker];
      // updating currentPoints with category
      const currentPointsForCateogry = currentPoints[updatedBlocker.category];
      const updatedPoints = {
        ...currentPoints,
        [updatedBlocker.category]:
          currentPointsForCateogry + updatedSuggestion.points,
      };
      return {
        ...currentState,
        blockers: updatedBlockers,
        currentPoints: updatedPoints,
      };
    }

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
