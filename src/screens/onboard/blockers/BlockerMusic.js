import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { List, Button } from "react-native-paper";
import styled from "styled-components/native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import Icon from "react-native-vector-icons/FontAwesome5";

function BlockerMusic(props) {
  const { blockers } = props;
  const blockerDescriptions = blockers.map((blocker) => blocker.description);

  return (
    <View style={bg.lime}>
      <View>
        <Text style={text.header}>Music</Text>
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
                <Icon name="music" size={30} color="#900" {...props} />
              )}
            />
          );
        })}
      </ListContainer>
      <Button
        mode="outlined"
        onPress={() => {
          console.log("Hello");
        }}
      >
        Continue to Dashboard
      </Button>
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
    (stateBlocker) => stateBlocker.category === "music"
  );
  return {
    blockers: musicBlockers,
  };
};
const BlockerMusicConnected = connect(mapStateToProps)(BlockerMusic);
export default BlockerMusicConnected;
