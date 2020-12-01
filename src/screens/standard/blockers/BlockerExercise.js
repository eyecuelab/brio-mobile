import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../rdx/actions";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import Icon from "react-native-vector-icons/FontAwesome5";
import SvgCheckinExercise from "../../../svg_assets/SvgCheckinExercise";

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
                underlayColor="gray"
                onPress={() => {
                  completedBlocker(blocker.id);
                }}
              >
                <List.Item
                  title={blocker.description}
                  left={(props) => (
                    <Icon name="grin" size={30} color="#900" {...props} />
                  )}
                />
              </TouchableHighlight>
            );
          } else {
            return (
              <TouchableHighlight key={blocker.id}>
                <List.Item
                  title={blocker.description}
                  left={(props) => (
                    <Icon name="check" size={30} color="#900" {...props} />
                  )}
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
        <CategoryText>Exercise</CategoryText>
      </CheckinContainer>
      <ListContainer>{displayBlockers()}</ListContainer>
      
     
    </View>
  );
}

const CheckinContainer = styled.View`
  margin-top: 36;
  align-items: center;
  justify-content: center;
`;

const CategoryText = styled.Text`
  font-size: 36px;
  font-weight: 900;
  color: #d8a1d5;
`;

const ListContainer = styled.View`
  margin-top: 36;
  margin-bottom: 36;
  margin-left: 36;
  justify-content: center;
`;

const mapStateToProps = (state) => {
  const stateBlockers = state.blockersState.blockers;
  const musicBlockers = stateBlockers.filter(
    (stateBlocker) => stateBlocker.category === "exercise"
  );
  return {
    blockers: musicBlockers,
  };
};
const BlockerExerciseConnected = connect(mapStateToProps)(BlockerExercise);
export default BlockerExerciseConnected;
