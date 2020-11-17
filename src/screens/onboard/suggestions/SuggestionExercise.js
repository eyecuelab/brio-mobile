import React from "react";
import { View, Text } from "react-native";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import Icon from "react-native-vector-icons/FontAwesome5";

function SuggestionExercise() {
  const suggestions = ["Go for a walk", "Bike", "Do Yoga"];

  return (
    <View style={bg.lime}>
      <View>
        <Text style={text.header}>Excercise</Text>
      </View>
      <View>
        <Text style={text.text}>Here are 3 suggestions for you</Text>
      </View>
      <ListContainer>
        {suggestions.map((suggestion) => {
          return (
            <List.Item
              key={suggestion}
              title={suggestion}
              left={(props) => (
                <Icon name="running" size={30} color="#900" {...props} />
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

export default SuggestionExercise;
