import React from "react";
import { Text, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import { List } from "react-native-paper";
import SvgStarIcon from "../../../svg_assets/SvgStarIcon";
import SvgStarIconComplete from "../../../svg_assets/SvgStarIconComplete";

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
            return (
              <>
                <TouchableHighlight
                  key={blocker.id}
                  activeOpacity="0.75"
                  underlayColor="#D8A1D5"
                  onPress={() => {
                    console.log("pressed");
                  }}
                  style={{ marginTop: 12, marginBottom: 24 }}
                >
                  <List.Item
                    key={blocker.id}
                    title={blocker.suggestions[0].description}
                    titleNumberOfLines={3}
                    left={() => (
                      <SvgStarIcon color1={"#D8A1D5"} color2={"#FFE3E3"} />
                    )}
                  />
                </TouchableHighlight>
              </>
            );
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
