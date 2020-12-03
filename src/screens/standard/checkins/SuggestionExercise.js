import React from "react";
import { TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../rdx/actions";
import { List } from "react-native-paper";
import SvgStarIcon from "../../../svg_assets/SvgStarIcon";

export const SuggestionExercise = (props) => {
  const { blockers, dispatch } = props;

  console.log(blockers)
  const completedSuggestion = (blockerId, suggestionId) => {
    const action = actions.completedSuggestion(blockerId, suggestionId);
    dispatch(action);
  };

  const displaySuggestions = () => {
    const blockersWithSugg = blockers.filter(
      (blocker) => blocker.suggestions && blocker.suggestions.length > 0
    );
    if (blockersWithSugg && blockersWithSugg.length > 0) {
      const suggestionsArray = blockersWithSugg.map(
        (blocker) => blocker.suggestions
      );
      const suggestions = suggestionsArray.flat();

      return (
        <>
          {blockersWithSugg.map((blocker) => {
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

  const displayCompletedSuggestions = () => {
    const blockersWithSugg = blockers.filter(
      (blocker) => blocker.suggestions && blocker.suggestions.length > 0
    );
    if (blockersWithSugg && blockersWithSugg.length > 0) {
      const suggestionsArray = blockersWithSugg.map(
        (blocker) => blocker.suggestions
      );
      const suggestions = suggestionsArray.flat();
    }
    return(
      <>
      {suggestions.map((suggestion) => {
        return (
          <TouchableHighlight
                  key={suggestion.id}
                  style={{
                    marginTop: 12,
                    marginBottom: 24,
                    backgroundColor: "#D8A1D5",
                  }}
                >
                  <List.Item
                    key={suggestion.id}
                    title={suggestion.description}
                    titleNumberOfLines={3}
                    titleStyle={{ color: "#FFFFFF" }}
                    description={getCompletedDate(suggestion)}
                    descriptionStyle={{ color: "#FFFFFF" }}
                    left={() => <SvgStarIconComplete />}
                  />
                </TouchableHighlight>
        )
      })}
      </>
    )
  };


  const getCompletedDate = (blocker) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const completedDate = blocker.completedAt;
    const month = months[completedDate.getMonth()];
    const day = days[completedDate.getDay()];
    const date = completedDate.getDate();
    const year = completedDate.getFullYear();

    return `${day} ${month} ${date}, ${year}`;
  };


  return (
    <>
      {displaySuggestions()}
      {displayCompletedSuggestions()}
    </>
  );
};

const mapStateToProps = (state) => {
  const stateBlockers = state.blockersState.blockers;
  const exerciseBlockers = stateBlockers.filter(
    (stateBlocker) => stateBlocker.category === "exercise"
  );
  return {
    blockers: exerciseBlockers,
  };
};

export default connect(mapStateToProps)(SuggestionExercise);
