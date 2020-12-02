import React from "react";
import { TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../rdx/actions";
import { List } from "react-native-paper";
import SvgStarIcon from "../../../svg_assets/SvgStarIcon";
import SvgStarIconComplete from "../../../svg_assets/SvgStarIconComplete";

function BlockerMusic(props) {
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
              <TouchableHighlight
                key={blocker.id}
                activeOpacity="0.75"
                underlayColor="#94D7B5"
                onPress={() => {
                  completedBlocker(blocker.id);
                }}
                style={{ marginTop: 12, marginBottom: 24 }}
              >
                <List.Item
                  title={blocker.description}
                  titleNumberOfLines={3}
                  left={() => (
                    <SvgStarIcon color1={"#94D7B5"} color2={"#DAF3E6"} />
                  )}
                />
              </TouchableHighlight>
            );
          } else {
            return (
              <TouchableHighlight
                key={blocker.id}
                style={{
                  marginTop: 12,
                  marginBottom: 24,
                  backgroundColor: "#94D7B5",
                }}
              >
                <List.Item
                  title={blocker.description}
                  titleNumberOfLines={3}
                  titleStyle={{ color: "#FFFFFF" }}
                  left={() => <SvgStarIconComplete />}
                />
              </TouchableHighlight>
            );
          }
        })}
      </>
    );
  };

  return <>{displayBlockers()}</>;
}
const mapStateToProps = (state) => {
  const stateBlockers = state.blockersState.blockers;
  const musicBlockers = stateBlockers.filter(
    (stateBlocker) => stateBlocker.category === "music"
  );
  return {
    blockers: musicBlockers,
  };
};
const BlockerMusicConnected = connect(mapStateToProps)(BlockerMusic);
export default BlockerMusicConnected;
