import * as c from "../actions/types";
import initBlockers from "./initBlockers";

export default (state = initBlockers(), action) => {
  switch (action.type) {
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
        doAnimation: true,
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
        doAnimation: true,
      };
    }
    case c.RESET_PROGRESS: {
      return initBlockers();
    }
    case c.DEACTIVATE_BLOCKERS: {
      return initBlockers();
    }
    case c.RESET_ANIMATION: {
      return {
        ...state,
        doAnimation: false,
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
