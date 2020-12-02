import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

export const SuggestionExercise = () => {
  return (
    <>
      <Text>SUGGESTION</Text>
    </>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(SuggestionExercise);
