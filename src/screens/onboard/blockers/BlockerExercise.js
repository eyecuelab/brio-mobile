import React from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import Icon from "react-native-vector-icons/FontAwesome5";
import sArrow from "../../../../assets/Swipe_Arrow.png";
import arrow from "../../../styles/ArrowStyle.js";

function BlockerExercise(props) {
  const { blockers } = props;
  const blockerDescriptions = blockers.map((blocker) => blocker.description);

  return (
    <View style={bg.berry}>
      <View>
        <Text style={text.header}>Excercise</Text>
      </View>
      <View>
        <Text style={text.text}>Here are 3 blockers for you</Text>
      </View>
      <ListContainer>
        {blockerDescriptions.map((blockerDescription) => {
          return (
            <List.Item
              key={blockerDescription}
              title={blockerDescription}
              left={(props) => (
                <Icon name="running" size={30} color="#900" {...props} />
              )}
            />
          );
        })}
      </ListContainer>
      <View style={arrow.bottom}>
        <Image source={sArrow} />
      </View>
    </View>
  );
}

const ListContainer = styled.View`
  margin-top: 36;
  margin-bottom: 36;
  margin-left: 36;
  justify-content: center;
`;

const mapStateToProps = (state) => {
  const stateBlockers = state.catState.blockers;
  const musicBlockers = stateBlockers.filter(
    (stateBlocker) => stateBlocker.category === "exercise"
  );
  return {
    blockers: musicBlockers,
  };
};
const BlockerExerciseConnected = connect(mapStateToProps)(BlockerExercise);
export default BlockerExerciseConnected;
