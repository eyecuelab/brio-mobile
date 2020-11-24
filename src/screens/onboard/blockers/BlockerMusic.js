import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as actions from "../../../rdx/actions";
import { List, Button } from "react-native-paper";
import styled from "styled-components/native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import Icon from "react-native-vector-icons/FontAwesome5";

function BlockerMusic(props) {
  const { dispatch, blockers } = props;
  const navigation = useNavigation();

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
    <View style={bg.lime}>
      <View>
        <Text style={text.header}>Music</Text>
      </View>
      <View>
        <Text style={text.text}>Here are 3 blockers for you</Text>
      </View>
      <ListContainer>{displayBlockers()}</ListContainer>
      <Button
        mode="outlined"
        onPress={() => {
          // navigation.navigate("StandardNavigation");
          console.log("HELLO")
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
