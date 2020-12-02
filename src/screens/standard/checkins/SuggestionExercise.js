import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

export const SuggestionExercise = (props) => {
  const { completedBlockers } = props;

  return (
    <>
      <Text>SUGGESTION</Text>
    </>
  );
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
