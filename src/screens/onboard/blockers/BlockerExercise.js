import React from "react";
import { View, Text, Image } from "react-native";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import Icon from "react-native-vector-icons/FontAwesome5";
import sArrow from "../../../../assets/Swipe_Arrow.png";
import arrow from "../../../styles/ArrowStyle.js"

function BlockerExercise() {
  const blockers = [
    "Do you have sneakers or running shoes?",
    "Do you have a helmet?",
    "Do you have a yoga mat?",
  ];

  return (
    <View style={bg.lime}>
      <View>
        <Text style={text.header}>Excercise</Text>
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

export default BlockerExercise;
