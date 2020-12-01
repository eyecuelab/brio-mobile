import React from "react";
import { View, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../rdx/actions";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import bg from "../../../styles/ScreenStyle.js";
import SvgCheckinExercise from "../../../svg_assets/SvgCheckinExercise";
import SvgStarIcon from "../../../svg_assets/SvgStarIcon";
import SvgStarIconComplete from "../../../svg_assets/SvgStarIconComplete";
import DashBar from "../dashboard/DashBar";

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
            );
          } else {
            return (
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
            );
          }
        })}
      </>
    );
  };

  return (
    <View style={bg.berry}>
      <CheckinContainer>
        <SvgCheckinExercise />
        <DashBar
          category={"Exercise"}
          color={"#d8a1d5"}
          from={"BlockerExercise"}
        />
      </CheckinContainer>
      <ListContainer>
        <ListHeaderTextWrapper>
          <ListHeaderText>TAP TO COMPLETE</ListHeaderText>
          <ListHeaderText>REFRESH</ListHeaderText>
        </ListHeaderTextWrapper>
        {displayBlockers()}
      </ListContainer>
    </View>
  );
}

const CheckinContainer = styled.View`
  margin-top: 36;
  align-items: center;
  justify-content: center;
`;
const ListContainer = styled.View`
  margin-top: 36;
  margin-right: 12;
  margin-left: 12;
  margin-bottom: 36;
  justify-content: center;
`;
const ListHeaderTextWrapper = styled.View`
  height: 20;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px;
`;
const ListHeaderText = styled.Text`
  color: #d8a1d5;
  font-size: 12px;
  font-weight: 900;
`;

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
