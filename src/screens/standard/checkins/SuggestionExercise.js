import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

export const SuggestionExercise = (props) => {
  const { completedBlockers } = props;

  const displaySuggestions = () => {
    const completedBlockersWithSugg = completedBlockers.filter(
      (blocker) => blocker.suggestions && blocker.suggestions.length > 0
    );
    if (completedBlockersWithSugg && completedBlockersWithSugg.length > 0) {
      return (
        <>
          {completedBlockersWithSugg.map((blocker) => {
            return <Text>{blocker.suggestions[0].description}</Text>;
          })}
        </>
      );
    }
  };
  return <>{displaySuggestions()}</>;
};

const mapStateToProps = (state) => {
  const stateBlockers = state.blockersState.blockers;
  const exerciseBlockers = stateBlockers.filter(
    (stateBlocker) => stateBlocker.category === "exercise"
  );
  const completedExerciseBlockers = exerciseBlockers.filter(
    (blocker) => blocker.completedAt !== null
  );
  return {
    completedBlockers: completedExerciseBlockers,
  };
};

export default connect(mapStateToProps)(SuggestionExercise);
