import React from "react";
import { View, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../rdx/actions";
import { List } from "react-native-paper";
import SvgStarIcon from "../../../svg_assets/SvgStarIcon";
import SvgStarIconComplete from "../../../svg_assets/SvgStarIconComplete";

function BlockerExercise(props) {
  const { dispatch, blockers } = props;

  console.log(blockers);

  const completedBlocker = (id) => {
    const action = actions.completedBlocker(id);
    dispatch(action);
  };

  const completedSuggestion = (blockerId, suggestionId) => {
    const action2 = actions.completedSuggestion(blockerId, suggestionId);
    dispatch(action2);
  };

  const displayBlockers = () => {
    return (
      <>
        {blockers.map((blocker) => {
          if (blocker.completedAt === null) {
            return (
              <TouchableHighlight
                key={blocker.id}
                activeOpacity="0.75"
                underlayColor="#D8A1D5"
                onPress={() => {
                  completedBlocker(blocker.id);
                }}
                style={{ marginTop: 12, marginBottom: 24 }}
              >
                <List.Item
                  key={blocker.id}
                  title={blocker.description}
                  titleNumberOfLines={3}
                  left={() => (
                    <SvgStarIcon color1={"#D8A1D5"} color2={"#FFE3E3"} />
                  )}
                />
              </TouchableHighlight>
            );
          } else {
            const uncompletedSuggestion = blocker.suggestions.find(
              (suggestion) => suggestion.completedAt === null
            );
            if (uncompletedSuggestion) {
              return (
                <>
                  <TouchableHighlight
                    key={uncompletedSuggestion.id}
                    activeOpacity="0.75"
                    underlayColor="#D8A1D5"
                    onPress={() => {
                      completedSuggestion(blocker.id, uncompletedSuggestion.id);
                    }}
                    style={{ marginTop: 12, marginBottom: 24 }}
                  >
                    <List.Item
                      key={uncompletedSuggestion.id}
                      title={uncompletedSuggestion.description}
                      titleNumberOfLines={3}
                      left={() => (
                        <SvgStarIcon color1={"#D8A1D5"} color2={"#FFE3E3"} />
                      )}
                    />
                  </TouchableHighlight>
                </>
              );
            }
          }
        })}
      </>
    );
  };

  const displayCompletedBlockers = () => {
    return (
      <>
        {displayDivider()}
        {blockers.map((blocker) => {
          if (blocker.completedAt !== null) {
            return (
              <>
                <TouchableHighlight
                  key={blocker.id}
                  style={{
                    marginTop: 12,
                    marginBottom: 24,
                    backgroundColor: "#D8A1D5",
                  }}
                >
                  <List.Item
                    key={blocker.id}
                    title={blocker.description}
                    titleNumberOfLines={3}
                    titleStyle={{ color: "#FFFFFF" }}
                    description={getCompletedDate(blocker)}
                    descriptionStyle={{ color: "#FFFFFF" }}
                    left={() => <SvgStarIconComplete />}
                  />
                </TouchableHighlight>
                {displayCompletedSuggestions(blocker.suggestions)}
              </>
            );
          }
        })}
      </>
    );
  };

  const displayCompletedSuggestions = (suggestions) => {
    return (
      <>
        {suggestions.map((suggestion) => {
          if (suggestion.completedAt !== null) {
            return (
              <>
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
              </>
            );
          }
        })}
      </>
    );
  };

  const displayDivider = () => {
    const completedBlockers = blockers.find(
      (blocker) => blocker.completedAt !== null
    );
    if (completedBlockers) {
      return (
        <View
          style={{
            borderBottomColor: "#D8A1D5",
            borderBottomWidth: 3,
          }}
        />
      );
    }
  };

  return (
    <>
      {displayBlockers()}
      {displayCompletedBlockers()}
    </>
  );
}

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

const mapStateToProps = (state) => {
  const stateBlockers = state.blockersState.blockers;
  const exerciseBlockers = stateBlockers.filter(
    (stateBlocker) => stateBlocker.category === "exercise"
  );
  return {
    blockers: exerciseBlockers,
  };
};
const BlockerExerciseConnected = connect(mapStateToProps)(BlockerExercise);
export default BlockerExerciseConnected;
