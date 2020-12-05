import React from "react";
import { View, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../rdx/actions";
import { List } from "react-native-paper";
import SvgStarIcon from "../../../svg_assets/SvgStarIcon";
import SvgStarIconComplete from "../../../svg_assets/SvgStarIconComplete";

function Blocker(props) {
  const { dispatch, blockers, color1, color2 } = props;

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
                underlayColor={color1}
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
                    <SvgStarIcon color1={`${color1}`} color2={`${color2}`} />
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
                    underlayColor={color1}
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
                        <SvgStarIcon
                          color1={`${color1}`}
                          color2={`${color2}`}
                        />
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
                    backgroundColor: `${color1}`,
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
                    backgroundColor: `${color1}`,
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
            borderBottomColor: `${color1}`,
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
  const blockers = stateBlockers.filter(
    (stateBlocker) => stateBlocker.category === `${category}`
  );
  return {
    blockers: blockers,
  };
};
const BlockerConnected = connect(mapStateToProps)(Blocker);
export default BlockerConnected;
