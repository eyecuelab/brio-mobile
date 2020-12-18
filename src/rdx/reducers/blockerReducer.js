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
    case c.RESET_PROGRESS: {
      return initBlockers();
    }
    case c.DEACTIVATE_BLOCKERS: {
      return initBlockers();
    }
    default:
      return state;
  }
};
