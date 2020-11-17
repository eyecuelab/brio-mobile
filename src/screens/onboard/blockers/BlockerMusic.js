import React from "react";
import { View, Text } from "react-native";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import Icon from "react-native-vector-icons/FontAwesome5";

function BlockerMusic() {
  const blockers = [
    "Do you know how to make a playlist?",
    "Are you following multiple artists?",
    "Do you follow other users?",
  ];

  return (
    <View style={bg.lime}>
      <View>
        <Text style={text.header}>Music</Text>
      </View>
      <View>
        <Text style={text.text}>Here are 3 blockers for you</Text>
      </View>
      <ListContainer>
        {blockers.map((blocker) => {
          return (
            <List.Item
              key={blocker}
              title={blocker}
              left={(props) => (
                <Icon name="music" size={30} color="#900" {...props} />
              )}
            />
          );
        })}
      </ListContainer>
    </View>
  );
}

const ListContainer = styled.View`
  margin-top: 36;
  margin-bottom: 36;
  margin-left: 36;
  justify-content: center;
`;

export default BlockerMusic;
