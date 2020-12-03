import React from "react";
import { TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../rdx/actions";
import { List } from "react-native-paper";
import SvgStarIcon from "../../../svg_assets/SvgStarIcon";

export const SuggestionExercise = (props) => {
  const { completedBlockers, dispatch } = props;
  console.log(completedBlockers)
  const completedSuggestion = (blockerId, suggestionId) => {
    const action = actions.completedSuggestion(blockerId, suggestionId);
    dispatch(action);
  };

  const displaySuggestions = () => {
    const completedBlockersWithSugg = completedBlockers.filter(
      (blocker) => blocker.suggestions && blocker.suggestions.length > 0
    );
    if (completedBlockersWithSugg && completedBlockersWithSugg.length > 0) {
      const suggestionsArray = completedBlockersWithSugg.map(
        (blocker) => blocker.suggestions
      );
      const suggestions = suggestionsArray.flat();

      return (
        <>
          {completedBlockersWithSugg.map((blocker) => {
            const nextSuggestion = suggestions.find(
              (suggestion) => blocker.id === suggestion.prerequisiteId
            );

            return (
              <>
                <TouchableHighlight
                  key={blocker.id}
                  activeOpacity="0.75"
                  underlayColor="#D8A1D5"
                  onPress={() => {
                    completedSuggestion(blocker.id, nextSuggestion.id);
                  }}
                  style={{ marginTop: 12, marginBottom: 24 }}
                >
                  <List.Item
                    key={blocker.id}
                    title={nextSuggestion.description}
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
