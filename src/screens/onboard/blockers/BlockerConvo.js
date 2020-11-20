import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../rdx/actions";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import Icon from "react-native-vector-icons/FontAwesome5";
import sArrow from "../../../../assets/Swipe_Arrow.png";
import arrow from "../../../styles/ArrowStyle.js";

function BlockerConvo(props) {
  const { dispatch, blockers } = props;

  const blockerDescriptions = blockers.map(
    (blocker, index) => blocker.description
  );
  const blockerIds = blockers.map((blocker, index) => blocker.id);

  const completedBlocker = (id) => {
    const action = actions.completedBlocker(id);
    dispatch(action);
  };

  return (
    <View style={bg.lime}>
      <View>
        <Text style={text.header}>Conversation</Text>
      </View>
      <View>
        <Text style={text.text}>Here are 3 blockers for you</Text>
      </View>
      <ListContainer>
        {blockerDescriptions.map((blockerDescription, index) => {
          return (
            <>
              <TouchableHighlight>
                <List.Item
                  key={index}
                  title={blockerDescription}
                  style={{ textDecorationLine: "line-through" }}
                  onPress={() => {
                    completedBlocker(blockerIds[index]);
                  }}
                  left={(props) => (
                    <Icon name="grin" size={30} color="#900" {...props} />
                  )}
                />
              </TouchableHighlight>
            </>
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
    (stateBlocker) => stateBlocker.category === "conversation"
  );
  console.log(musicBlockers);
  return {
    blockers: musicBlockers,
  };
};
const BlockerConvoConnected = connect(mapStateToProps)(BlockerConvo);
export default BlockerConvoConnected;
