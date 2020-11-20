import React from "react";
import { View, Text, Image } from "react-native";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import Icon from "react-native-vector-icons/FontAwesome5";
import sArrow from "../../../../assets/Swipe_Arrow.png";
import arrow from "../../../styles/ArrowStyle.js";

function SuggestionConvo() {
  const suggestions = [
    "Call someone you haven't talked to in awhile",
    "Write/email a letter",
    "Join new Meetup group",
  ];

  return (
    <View style={bg.grape}>
      <View>
        <Text style={text.header}>Conversation</Text>
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
                <Icon name="grin" size={30} color="#900" {...props} />
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
const ArrowContainer = styled.View`
  margin-top: 36;
  margin-bottom: 36;
  margin-left: 36;
  justify-content: center;
`;

export default SuggestionConvo;
