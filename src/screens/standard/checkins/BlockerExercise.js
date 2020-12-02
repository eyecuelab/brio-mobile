import React from "react";
import { TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../rdx/actions";
import { List } from "react-native-paper";
import SvgStarIcon from "../../../svg_assets/SvgStarIcon";
import SvgStarIconComplete from "../../../svg_assets/SvgStarIconComplete";

function BlockerExercise(props) {
  const { dispatch, blockers } = props;

  const completedBlocker = (id) => {
    const action = actions.completedBlocker(id);
    dispatch(action);
  };

  const displayBlockers = () => {
    return (
      <>
        {blockers.map((blocker) => {
          if (blocker.completedAt === null) {
            return (
              <>
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
                  title={blocker.description}
                  titleNumberOfLines={3}
                  left={() => (
                    <SvgStarIcon color1={"#D8A1D5"} color2={"#FFE3E3"} />
                  )}
                />
              </TouchableHighlight>
              </>
            );
          } else {
            return (
              <>
              {displayCompletedBlockers()}
              <TouchableHighlight
                key={blocker.id}
                style={{
                  marginTop: 12,
                  marginBottom: 24,
                  backgroundColor: "#D8A1D5",
                }}
              >
                <List.Item
                  title={blocker.description}
                  titleNumberOfLines={3}
                  titleStyle={{ color: "#FFFFFF" }}
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

  const displayCompletedBlockers = () => {
    console.log("HELLO")
  }

  return <>{displayBlockers()}</>;
}
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
